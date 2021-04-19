import React, { ReactNode, ElementType } from 'react';
import classnames from 'classnames';
import { Box } from '../system';
import * as styles from './typography.css';

export interface TextProps {
  component?: ElementType;
  size?: keyof typeof styles.text;
  color?: keyof typeof styles.color;
  weight?: keyof typeof styles.weight;
  baseline?: boolean;
  children: ReactNode;
}

export const useTextStyles = ({
  size = 'standard',
  color = 'neutral',
  weight = 'regular',
  baseline,
}: {
  size?: keyof typeof styles.text;
  color?: keyof typeof styles.color;
  weight?: keyof typeof styles.weight;
  baseline: boolean;
}) =>
  classnames(
    styles.font.body,
    styles.text[size].base,
    styles.color[color],
    styles.weight[weight],
    {
      [styles.text.standard.trims]: baseline,
    },
  );

export default ({
  component = 'span',
  size,
  color,
  weight,
  baseline = true,
  children,
}: TextProps) => {
  return (
    <Box
      component={component}
      display="block"
      className={useTextStyles({ size, color, weight, baseline })}
    >
      {children}
    </Box>
  );
};
