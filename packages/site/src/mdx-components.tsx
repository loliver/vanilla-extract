import React, { ReactNode, AllHTMLAttributes } from 'react';
import Text from './Typography/Text';
import { H1, H2, H3, HeadingProps } from './Typography/Heading';
import { Box } from './system';
import Code from './Code/Code';
import InlineCode from './InlineCode/InlineCode';
import Link from './Typography/Link';
import Blockquote from './Blockquote/Blockquote';

type Children = {
  children: ReactNode;
};

const P = (props: Children) => (
  <Box component="p" paddingBottom="xlarge">
    <Text component="span">{props.children}</Text>
  </Box>
);

const Pre = (props: AllHTMLAttributes<HTMLPreElement>) => (
  <Box component="pre" paddingBottom="large" {...props} />
);

const Th = (props: Children) => (
  <Text component="th" weight="strong">
    {props.children}
  </Text>
);

const Td = (props: Children) => <Text component="td">{props.children}</Text>;

const A = ({
  href,
  size, // Omit
  ...restProps
}: AllHTMLAttributes<HTMLAnchorElement>) =>
  href ? <Link to={href} {...restProps} /> : <a {...restProps} />;

export default {
  hr: () => (
    <Box paddingTop="small" paddingBottom="xxlarge">
      <Box
        style={{
          height: 8,
          width: 120,
          borderRadius: '9999px',
          background: '#f090f5',
        }}
      />
    </Box>
  ),
  p: P,
  h1: (props: HeadingProps) => (
    <Box marginBottom="xxlarge">
      <H1 {...props} />
    </Box>
  ),
  h2: (props: HeadingProps) => (
    <Box marginBottom="xlarge">
      <H3 {...props} />
    </Box>
  ),
  h3: H3,
  pre: Pre,
  code: Code,
  inlineCode: InlineCode,
  th: Th,
  td: Td,
  a: A,
  blockquote: Blockquote,
};
