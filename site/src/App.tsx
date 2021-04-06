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
import { Heading } from './Typography/Heading';
import Link from './Typography/Link';
import Text from './Typography/Text';
import { Stack, ContentBlock } from './system';
import { Title, Meta } from 'react-head';
import Logo from './Logo/Logo';

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
          <Box display="flex" alignItems="center">
            <Box marginRight="medium">
              <Logo size={40} />
            </Box>
            <Heading level="3">vanilla-extract</Heading>
          </Box>
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
        style={{
          position: 'relative',
          boxShadow: '0 -10px 20px 0 #20734D',
        }}
      >
        <ReactRouterLink to="/" style={{ textDecoration: 'none' }}>
          <Box display="flex" alignItems="center">
            <Box marginRight="medium">
              <Logo size={40} />
            </Box>
            <Heading level="3">vanilla-extract</Heading>
          </Box>
        </ReactRouterLink>
        <Box display="flex">
          <Box paddingRight="xlarge">
            <Link to="/documentation" size="small">
              Documentation
            </Link>
          </Box>
          <Link to="https://github.com/seek-oss/vanilla-extract" size="small">
            Github
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        style={{
          height: '30vh',
          minHeight: '400px',
          background: '#D0FDE8',
        }}
        paddingBottom="xlarge"
      >
        <ContentBlock guttersOnMobile>
          <Box
            style={{
              maxWidth: 700,
              minWidth: '250px',
            }}
          >
            <Stack space="xxlarge">
              <Heading level="1">
                The zero-runtime
                <br />
                CSS-in-TypeScript
                <br />
                preprocessor.
              </Heading>
              <Text>
                Write your styles in TypeScript (or JavaScript) with locally
                scoped class names and CSS Variables, then generate static CSS
                files at build time.
              </Text>
            </Stack>
          </Box>
        </ContentBlock>
      </Box>

      <ContentBlock guttersOnMobile>
        <Box
          padding={{ mobile: 'xlarge', desktop: 'xxlarge' }}
          style={{
            transform: 'translateY(-50%)',
            background: 'white',
            borderRadius: '28px',
            boxShadow: '0 0 50px -10px #24966180',
            fontFamily: '"Roboto Mono", Menlo, monospace',
          }}
        >
          $ npm install <span style={{ whiteSpace: 'nowrap' }}>--save-dev</span>{' '}
          <span style={{ whiteSpace: 'nowrap' }}>@vanilla-extract/css</span>
        </Box>
      </ContentBlock>
    </>
  );
};

const pageTitle = 'vanilla-extract — Zero-runtime Stylesheets-in-TypeScript.';
const description = 'Zero-runtime Stylesheets-in-TypeScript.';

export default () => {
  return (
    <div className={themeClass}>
      <Title>{pageTitle}</Title>
      <Meta property="og:title" content={pageTitle} />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="description" content={description} />
      <Meta property="og:description" content={description} />
      <Meta name="twitter:description" content={description} />
      <Route path="/" exact component={HomePage} />
      <Route path="/documentation" component={DocumentationPage} />
    </div>
  );
};
