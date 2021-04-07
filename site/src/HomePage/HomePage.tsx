import React from 'react';
import dedent from 'dedent';
import { Box, Stack, ContentBlock } from '../system';
import { NewWindow } from '../NewWindow/NewWindow';
import { Heading } from '../Typography/Heading';
import { Chevron } from '../Chevron/Chevron';
import Link from '../Typography/Link';
import Text from '../Typography/Text';
import Logo from '../Logo/Logo';
import Code from '../Code/Code';

export const HomePage = () => {
  return (
    <>
      <Box
        paddingY="xxxlarge"
        paddingX={{ mobile: 'none', desktop: 'xxlarge' }}
        background="green"
      >
        <ContentBlock size="large" guttersOnMobile>
          <Box
            display="flex"
            flexDirection={{ mobile: 'column', desktop: 'row' }}
            alignItems={{ mobile: 'center', desktop: 'center' }}
            paddingY={{ mobile: 'medium', desktop: 'xxxlarge' }}
          >
            <Box flexGrow={0} style={{ maxWidth: 600 }}>
              <Stack space="xxlarge">
                <Logo size={100} />
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
            </Box>
            <Box
              borderRadius="large"
              marginLeft={{ mobile: 'none', desktop: 'xxlarge' }}
              marginTop={{ mobile: 'xxlarge', desktop: 'none' }}
              flexGrow={1}
              style={{ overflow: 'hidden' }}
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
                });`}
              </Code>
            </Box>
          </Box>
        </ContentBlock>
      </Box>

      <ContentBlock guttersOnMobile>
        <Box
          padding={{ mobile: 'xlarge', desktop: 'xxlarge' }}
          borderRadius="large"
          background="body"
          style={{
            transform: 'translateY(-50%)',
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
