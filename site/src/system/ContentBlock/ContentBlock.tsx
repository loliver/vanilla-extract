import React, { ReactNode } from 'react';
import { Box } from '../';
import * as styles from './ContentBlock.css';

export const ContentBlock = ({
  children,
  guttersOnMobile = true,
}: {
  children: ReactNode;
  guttersOnMobile?: boolean;
}) => {
  return (
    <Box
      className={styles.root}
      paddingX={
        guttersOnMobile ? { mobile: 'medium', desktop: 'none' } : undefined
      }
    >
      {children}
    </Box>
  );
};
