import React from 'react';
import * as styles from './Anchor.css';

interface AnchorProps {
  id: string;
}

export const Anchor = ({ id }: AnchorProps) => (
  <a id={id} className={styles.root} />
);
