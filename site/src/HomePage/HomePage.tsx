import React, { ReactNode } from 'react';
import dedent from 'dedent';
import { Box, Stack, ContentBlock, Columns } from '../system';
import { NewWindow } from '../NewWindow/NewWindow';
import { Heading } from '../Typography/Heading';
import { Chevron } from '../Chevron/Chevron';
import Link from '../Typography/Link';
import Text from '../Typography/Text';
import Logo from '../Logo/Logo';
import Code from '../Code/Code';
import * as styles from './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <Box paddingY="xxxlarge" className={styles.skewedContainer}>
        <ContentBlock size="large" guttersOnMobile>
          <Box paddingY={{ mobile: 'medium', desktop: 'xxlarge' }}>
            <Columns space="xxlarge" collapseOnMobile alignY="center">
              <Stack space="xxlarge">
                <Logo size={100} />
                <Heading level="1" branded>
                  Zero-runtime
                  <br />
                  Stylesheets in
                  <br />
                  TypeScript.
                </Heading>
                <Text>
                  Write your styles in TypeScript (or JavaScript) with locally
                  scoped class names and CSS Variables, then generate static CSS
                  files at build time.
                </Text>
                <Box display="flex" alignItems="center">
                  <Box paddingRight="xlarge">
                    <Link variant="button" to="/documentation">
                      Documentation <Chevron direction="right" />
                    </Link>
                  </Box>
                  <Link to="https://github.com/seek-oss/vanilla-extract">
                    GitHub <NewWindow />
                  </Link>
                </Box>
              </Stack>
              <Box borderRadius="large" style={{ overflow: 'hidden' }}>
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
                });`}
                </Code>
              </Box>
            </Columns>
          </Box>
        </ContentBlock>
      </Box>

      <Stack space="xxxlarge">
        <ContentBlock guttersOnMobile>
          <Box
            padding={{ mobile: 'xlarge', desktop: 'xxlarge' }}
            borderRadius="large"
            background="body"
            style={{
              boxShadow: '0 0 50px -10px #24966180',
              fontFamily: '"Roboto Mono", Menlo, monospace',
            }}
          >
            $ npm install{' '}
            <span style={{ whiteSpace: 'nowrap' }}>--save-dev</span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>@vanilla-extract/css</span>
          </Box>
        </ContentBlock>

        <ContentBlock guttersOnMobile size="large">
          <Columns space="xxlarge" collapseOnMobile>
            <Feature title="Type-safe preprocessor">
              All styles generated at build time — just like{' '}
              <Link to="https://sass-lang.com" size="small">
                Sass
              </Link>
              ,{' '}
              <Link to="http://lesscss.org)" size="small">
                LESS
              </Link>
              , etc, but with a type-safe contract.
            </Feature>

            <Feature title="Local scoped CSS">
              The power of deterministic, scoped styles using CSS Modules —
              extended to CSS variables, keyframes and font-faces.
            </Feature>

            <Feature title="High-level theming">
              Supports multiple themes simultaneously via first class scoping of
              CSS variables. No globals!
            </Feature>

            <Feature title="Utilities">
              Provides type-safe utilities for generating variable-based
              &ldquo;calc&rdquo; expressions.
            </Feature>
          </Columns>
        </ContentBlock>
      </Stack>
    </>
  );
};

const Feature = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Box style={{ position: 'relative' }} paddingLeft="xlarge">
    <Box
      style={{ position: 'absolute' }}
      className={styles.featureKeyLine}
      paddingLeft="xsmall"
      marginTop="-small"
      borderRadius="medium"
    />
    <Stack space="xlarge">
      <Heading level="4">{title}</Heading>
      <Text size="small">{children}</Text>
    </Stack>
  </Box>
);
