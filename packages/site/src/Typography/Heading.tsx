import React, { createElement, Fragment, ReactNode } from 'react';
import { Anchor } from '../Anchor/Anchor';
import classnames from 'classnames';

import * as styles from './typography.css';
import { Box } from '../system';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const getHeadingComponent = (level: keyof typeof styles.heading) => {
  if (level === '1') {
    return 'h1';
  }
  if (level === '2') {
    return 'h2';
  }
  if (level === '3') {
    return 'h3';
  }

  throw new Error('No valid heading level');
};

export interface HeadingProps {
  children: ReactNode;
  id: string;
  level: keyof typeof styles.heading;
}
const Heading = ({ level, children, id }: HeadingProps) => {
  const headingElement = createElement(
    Box,
    {
      component: getHeadingComponent(level),
      className: classnames(
        styles.font.heading,
        styles.color.strong,
        styles.heading[level].base,
        styles.heading[level].trims,
      ),
    },
    children,
  );

  return level === '2' ? (
    <Fragment>
      <Anchor id={id} />
      <a style={{ textDecoration: 'none' }} href={`#${id}`}>
        {headingElement}
      </a>
    </Fragment>
  ) : (
    headingElement
  );
};

export const H1 = (props: Omit<HeadingProps, 'level'>) => (
  <Heading level="1" {...props} />
);

export const H2 = (props: Omit<HeadingProps, 'level'>) => (
  <Heading level="2" {...props} />
);

export const H3 = (props: Omit<HeadingProps, 'level'>) => (
  <Heading level="3" {...props} />
);
