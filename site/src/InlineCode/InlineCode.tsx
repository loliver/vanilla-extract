import React, { ReactNode } from 'react';
import { Box } from '../system';
import * as styles from './InlineCode.css';

export interface InlineCodeProps {
  children: ReactNode;
}
export default ({ children }: InlineCodeProps) => {
  return (
    <Box component="code" className={styles.code}>
      {children}
    </Box>
  );
};
