import React, { ReactNode } from 'react';
import { Box } from '../system';
import * as styles from './Blockquote.css';

export default (props: { children: ReactNode }) => {
  return (
    <Box
      paddingLeft="xlarge"
      paddingRight="xlarge"
      paddingTop="xlarge"
      marginBottom="xlarge"
      className={styles.root}
    >
      {props.children}
    </Box>
  );
};
