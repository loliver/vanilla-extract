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
export default ({
  component = 'p',
  size = 'standard',
  color = 'neutral',
  weight = 'regular',
  baseline = true,
  children,
}: TextProps) => {
  return (
    <Box
      component={component}
      className={classnames(
        styles.font.body,
        styles.text[size].base,
        styles.color[color],
        styles.weight[weight],
        {
          [styles.text.standard.trims]: baseline,
        },
      )}
    >
      {children}
    </Box>
  );
};
