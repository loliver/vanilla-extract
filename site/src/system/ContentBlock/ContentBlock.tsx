import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { Box } from '../';
import * as styles from './ContentBlock.css';

export const ContentBlock = ({
  children,
  guttersOnMobile = true,
  size = 'standard',
}: {
  children: ReactNode;
  guttersOnMobile?: boolean;
  size?: keyof typeof styles.width;
}) => {
  return (
    <Box
      className={classnames(styles.root, styles.width[size])}
      paddingX={
        guttersOnMobile ? { mobile: 'medium', desktop: 'none' } : undefined
      }
    >
      {children}
    </Box>
  );
};
