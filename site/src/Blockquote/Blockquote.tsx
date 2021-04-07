import React, { ReactNode } from 'react';
import { Box } from '../system';
import * as styles from './Blockquote.css';

export default (props: { children: ReactNode }) => {
  return (
    <Box
      component="blockquote"
      paddingX="xlarge"
      paddingTop="xlarge"
      marginBottom="xlarge"
      borderRadius="small"
      className={styles.root}
    >
      {props.children}
    </Box>
  );
};
