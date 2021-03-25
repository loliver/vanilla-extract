import React, { useState } from 'react';
import classnames from 'classnames';
import { Link, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdx-components';
import { Box } from './system';
import DocsPage from './DocsPage/DocsPage';
import { themeClass } from './themes.css';
import * as styles from './App.css';
import Navigation from './Navigation/Navigation';
import { Fab } from './Fab/Fab';
import { ContentBlock } from './system/ContentBlock/ContentBlock';
import { Heading } from './Typography/Heading';

const Logo = () => (
  <Box
    display="flex"
    alignItems="center"
    style={{
      fontSize: 50,
    }}
  >
    <Box marginRight="medium">🧁</Box>
    <Heading level="2">vanilla-extract</Heading>
  </Box>
);

const DocumentationPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
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
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <Logo />
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
  );
};

const HomePage = () => {
  return (
    <>
      <Box
        component="header"
        display="flex"
        alignItems="flexStart"
        justifyContent="spaceBetween"
        paddingTop="large"
        paddingX="large"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <Logo />
        </Link>
      </Box>
      <ContentBlock>
        <Heading level="1">
          The zero-runtime CSS-in-TypeScript preprocessor.
        </Heading>
      </ContentBlock>
    </>
  );
};

export default () => {
  return (
    <div className={themeClass}>
      <Route path="/" exact component={HomePage} />
      <Route path="/documentation" component={DocumentationPage} />
    </div>
  );
};
