import React, { ReactNode } from 'react';
import { Box } from '../';
import * as styles from './ContentBlock.css';

export const ContentBlock = ({ children }: { children: ReactNode }) => {
  return <Box className={styles.root}>{children}</Box>;
};
