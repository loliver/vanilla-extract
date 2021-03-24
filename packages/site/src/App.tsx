import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdx-components';
import { Section, Box } from './system';
import Header from './Header/Header';
import DocsPage from './DocsPage/DocsPage';
import { themeClass } from './themes.css';
import * as styles from './App.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <Section>
        <Box paddingTop={{ mobile: 'large', desktop: 'xxlarge' }}>
          <DocsPage />
        </Box>
      </Section>
    </div>
  );
};

export default () => (
  <div className={themeClass}>
    <MDXProvider components={mdxComponents}>
      <Header />
      <Content />
    </MDXProvider>
  </div>
);
