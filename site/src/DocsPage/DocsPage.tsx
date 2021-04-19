import React, { useState } from 'react';
import { Link as ReactRouterLink, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { Title, Meta } from 'react-head';
import classnames from 'classnames';
import { useHeadingRouteUpdates } from '../useHeadingRoute';
import Navigation from '../Navigation/Navigation';
import SiblingDoc from './SiblingDoc/SiblingDoc';
import mdxComponents from '../mdx-components';
import { Fab } from '../Fab/Fab';
import { Box } from '../system';
import docs from '../docs-store';
import Logo from '../Logo/Logo';
import * as styles from './DocsPage.css';

interface DocsRouteProps {
  component: (props: any) => JSX.Element;
  prevDoc?: {
    title: string;
    route: string;
  };
  nextDoc?: {
    title: string;
    route: string;
  };
  hashes: Array<string>;
}

const DocsRoute = ({
  component: Component,
  prevDoc,
  nextDoc,
  hashes,
}: DocsRouteProps) => {
  useHeadingRouteUpdates(hashes);

  return (
    <div>
      <Component />
      {prevDoc && (
        <div style={{ float: 'left' }}>
          <SiblingDoc direction="left" {...prevDoc} />
        </div>
      )}
      {nextDoc && (
        <div style={{ float: 'right' }}>
          <SiblingDoc direction="right" {...nextDoc} />
        </div>
      )}
    </div>
  );
};

export const DocsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <MDXProvider components={mdxComponents}>
      <Box
        component="header"
        display="flex"
        justifyContent="spaceBetween"
        padding="large"
        className={styles.header}
      >
        <ReactRouterLink
          to="/"
          className={styles.homeLink}
          title="Back to home"
        >
          <Logo size={40} />
        </ReactRouterLink>
        <Fab open={menuOpen} onClick={toggleMenu} />
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
        <Box style={{ overflow: 'auto', height: '100%' }}>
          <Navigation onSelect={closeMenu} />
        </Box>
      </Box>
      <Box className={styles.container}>
        <Box component="main" paddingX="large" className={styles.main}>
          <Box paddingBottom="xxxlarge">
            {docs.map(({ route, Component, title, sections }, index) => {
              const prevDoc = docs[index - 1];
              const nextDoc = docs[index + 1];
              const pageTitle = `vanilla-extract${
                index ? ` – ${title} ` : ''
              }`.trim();
              const hashes = sections.map(({ hash }) => hash);

              return (
                <Route
                  key={route}
                  path={route}
                  exact
                  render={() => (
                    <>
                      <Title>{pageTitle}</Title>
                      <Meta property="og:title" content={pageTitle} />
                      <Meta name="twitter:title" content={pageTitle} />
                      <DocsRoute
                        nextDoc={nextDoc}
                        prevDoc={prevDoc}
                        hashes={hashes}
                        component={Component}
                      />
                    </>
                  )}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </MDXProvider>
  );
};
