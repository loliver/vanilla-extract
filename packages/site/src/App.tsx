import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdx-components';
import { Box } from './system';
import DocsPage from './DocsPage/DocsPage';
import { themeClass } from './themes.css';
import * as styles from './App.css';
import Navigation from './Navigation/Navigation';
import { H2 } from './Typography/Heading';
import { Fab } from './Fab/Fab';

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={themeClass}>
      <MDXProvider components={mdxComponents}>
        <Box
          component="header"
          display="flex"
          alignItems="flexStart"
          justifyContent="spaceBetween"
          paddingTop="large"
          paddingX="large"
          className={styles.header}
        >
          <Link
            to=""
            style={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 0,
              textDecoration: 'none',
              fontSize: 50,
            }}
          >
            <Box marginRight="medium">🧁</Box>
            <H2 id="title">vanilla-extract</H2>
          </Link>
          <Box paddingTop="small">
            <Fab open={menuOpen} onClick={toggleMenu} />
          </Box>
        </Box>
        <Box
          className={classnames(
            styles.backdrop,
            menuOpen ? styles.backdrop_isVisible : styles.backdrop_isHidden,
          )}
          onClick={toggleMenu}
        />
        <Box className={styles.container}>
          <Box
            component="aside"
            paddingTop={{ mobile: 'xlarge', desktop: 'none' }}
            paddingX={{ mobile: 'xlarge', desktop: 'large' }}
            className={classnames(
              styles.sidebar,
              menuOpen ? styles.sidebarOpen : '',
            )}
          >
            <Navigation onSelect={closeMenu} />
          </Box>

          <Box component="main" paddingX="large" className={styles.main}>
            <DocsPage />
          </Box>
        </Box>
      </MDXProvider>
    </div>
  );
};
