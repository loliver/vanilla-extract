import React, { useState } from 'react';
import classnames from 'classnames';
import dedent from 'dedent';
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
import Code from './Code/Code';

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
      <Box className={styles.container}>
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
        padding="large"
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
        paddingY="xxxlarge"
        paddingX={{ mobile: 'medium', desktop: 'xxlarge' }}
        style={{
          background: '#D0FDE8',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          paddingBottom="xxlarge"
          style={{
            maxWidth: 1350,
            margin: '0 auto',
          }}
        >
          <Box style={{ flexGrow: 0, maxWidth: 600 }}>
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
          <Box
            style={{
              flexGrow: 1,
              borderRadius: '28px',
              overflow: 'hidden',
            }}
            marginLeft="xxlarge"
          >
            <Code language="tsx">
              {dedent`import { createGlobalTheme, style } from '@vanilla-extract/css';

            // Set up the theme via CSS Variables
            export const themeVars = createGlobalTheme(':root', {
              color: {
                brand: 'blue'
              },
              font: {
                body: 'comic sans ms'
              }
            });

            // Consume the theme
            export const exampleStyle = style({
              backgroundColor: themeVars.color.brand,
              fontFamily: themeVars.font.body,
              color: 'white',
              padding: '10px'
            })`}
            </Code>
          </Box>
        </Box>
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
