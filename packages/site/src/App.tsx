import React, { useState } from 'react';
import classnames from 'classnames';
import { Link as ReactRouterLink, Route } from 'react-router-dom';
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
import Link from './Typography/Link';
import Code from './Code/Code';
import Text from './Typography/Text';

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
        <ReactRouterLink to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </ReactRouterLink>
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
        alignItems="center"
        justifyContent="spaceBetween"
        paddingY="large"
        paddingX="large"
      >
        <ReactRouterLink to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </ReactRouterLink>
        <Box display="flex">
          <Box paddingRight="xlarge">
            <Link to="/documentation" size="small">
              Documentation
            </Link>
          </Box>
          <Link to="https://github.com/seek-oss/library-name" size="small">
            Github
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        style={{ height: '30vh', minHeight: '400px', background: '#94F6C9' }}
      >
        <ContentBlock>
          <Heading level="1">
            The zero-runtime CSS-in-TypeScript preprocessor.
          </Heading>
          <Text>
            Write your styles in TypeScript (or JavaScript) with locally scoped
            class names and CSS Variables, then generate static CSS files at
            build time.
          </Text>
          <Box style={{ maxWidth: 400, margin: '0 auto' }}>
            <Code language="bash">$ npm install @mattsjones/css-core</Code>
          </Box>
        </ContentBlock>
      </Box>
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