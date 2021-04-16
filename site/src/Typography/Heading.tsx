import React, { ElementType, ReactNode } from 'react';
import classnames from 'classnames';

import * as styles from './typography.css';
import { Box } from '../system';

export type HeadingLevel = keyof typeof styles.heading;

const getHeadingComponent = (level: HeadingLevel) => {
  if (level === '1') {
    return 'h1';
  }
  if (level === '2') {
    return 'h2';
  }
  if (level === '3') {
    return 'h3';
  }
  if (level === '4') {
    return 'h4';
  }

  throw new Error('No valid heading level');
};

export interface HeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  branded?: boolean;
  component?: ElementType;
}

export const useHeadingStyles = (level: HeadingLevel, branded?: boolean) =>
  classnames(
    branded ? styles.font.brand : styles.font.heading,
    styles.color.strong,
    styles.heading[level].base,
    styles.heading[level].trims,
  );

export const Heading = ({
  level,
  component,
  branded = false,
  children,
}: HeadingProps) => {
  return (
    <Box
      component={component || getHeadingComponent(level)}
      className={useHeadingStyles(level, branded)}
    >
      {children}
    </Box>
  );
};