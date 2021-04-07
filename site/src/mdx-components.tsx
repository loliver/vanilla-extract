import React, {
  ReactNode,
  AllHTMLAttributes,
  ElementType,
  createElement,
} from 'react';
import Text, { useTextStyles } from './Typography/Text';
import { Box } from './system';
import Code from './Code/Code';
import InlineCode from './InlineCode/InlineCode';
import Link from './Typography/Link';
import Blockquote from './Blockquote/Blockquote';
import { HeadingLevel, useHeadingStyles } from './Typography/Heading';
import Divider from './Divider/Divider';

interface Children {
  children: ReactNode;
}
interface HeadingProps {
  children: ReactNode;
  component: ElementType;
  level: HeadingLevel;
  id: string;
}

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
  href ? (
    <Link to={href} {...restProps} underline="always" />
  ) : (
    <a {...restProps} />
  );

const Heading = ({ level, component, children, id }: HeadingProps) => {
  const headingElement = createElement(
    Box,
    {
      component: component,
      className: useHeadingStyles(level),
    },
    children,
  );

  return id ? (
    <>
      <Box
        component="a"
        display="block"
        id={id}
        style={{
          visibility: 'hidden',
        }}
      />
      <a style={{ textDecoration: 'none' }} href={`#${id}`}>
        {headingElement}
      </a>
    </>
  ) : (
    headingElement
  );
};

export default {
  hr: () => (
    <Box paddingTop="small" paddingBottom="xxlarge">
      <Divider />
    </Box>
  ),
  p: P,
  h1: ({ component, ...props }: HeadingProps) => (
    <Box component="h1" marginBottom="xxlarge">
      <Heading component="span" {...props} level="1" />
    </Box>
  ),
  h2: ({ component, ...props }: HeadingProps) => (
    <Box component="h2" marginBottom="xlarge">
      <Heading component="span" {...props} level="3" />
    </Box>
  ),
  h3: ({ component, ...props }: HeadingProps) => (
    <Box component="h3" marginBottom="xlarge">
      <Heading component="span" {...props} level="3" />
    </Box>
  ),
  pre: Pre,
  code: ({
    'data-language': language,
    dangerouslySetInnerHTML,
  }: {
    'data-language': string;
    dangerouslySetInnerHTML: { __html: string };
  }) => (
    <Box marginBottom={{ mobile: 'small', desktop: 'xlarge' }}>
      <Code language={language}>{dangerouslySetInnerHTML}</Code>
    </Box>
  ),
  inlineCode: InlineCode,
  th: Th,
  td: Td,
  a: A,
  blockquote: Blockquote,
  ul: (props: Children) => (
    <Box
      component="ul"
      paddingBottom="large"
      className={useTextStyles({ baseline: false })}
      style={{
        listStyle: 'disc',
        padding: '0 1em',
      }}
    >
      {props.children}
    </Box>
  ),
  ol: (props: Children) => (
    <Box
      component="ol"
      paddingBottom="large"
      className={useTextStyles({ baseline: false })}
      style={{
        listStyle: 'decimal',
        padding: '0 1em',
      }}
    >
      {props.children}
    </Box>
  ),
  li: (props: Children) => (
    <Box component="li" paddingBottom="large">
      <Text component="span" baseline={false}>
        {props.children}
      </Text>
    </Box>
  ),
};
