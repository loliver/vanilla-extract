import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Title, Meta } from 'react-head';
import docs from '../docs-store';
import SiblingDoc from './SiblingDoc/SiblingDoc';
import { useHeadingRouteUpdates } from '../useHeadingRoute';
import { Box } from '../system';

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

export default () => (
  <Box paddingBottom="xxxlarge">
    {docs.map(({ route, Component, title, sections }, index) => {
      const prevDoc = docs[index - 1];
      const nextDoc = docs[index + 1];
      const pageTitle = `vanilla-extract${index ? ` – ${title} ` : ''}`.trim();
      const hashes = sections.map(({ hash }) => hash);

      return (
        <Route
          key={route}
          path={route}
          exact
          render={() => (
            <Fragment>
              <Title>{pageTitle}</Title>
              <Meta property="og:title" content={pageTitle} />
              <Meta name="twitter:title" content={pageTitle} />
              <DocsRoute
                nextDoc={nextDoc}
                prevDoc={prevDoc}
                hashes={hashes}
                component={Component}
              />
            </Fragment>
          )}
        />
      );
    })}
  </Box>
);
