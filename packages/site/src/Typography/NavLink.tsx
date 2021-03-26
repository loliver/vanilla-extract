import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classnames from 'classnames';
import * as textStyles from './typography.css';
import * as styles from './NavLink.css';

interface LinkProps extends NavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small' | 'xsmall';
}
export default ({
  baseline = true,
  size = 'standard',
  children,
  ...restProps
}: LinkProps) => {
  return (
    <NavLink
      {...restProps}
      className={classnames(
        styles.link,
        styles.strong,
        textStyles.font.body,
        textStyles.text[size].base,
        {
          [textStyles.text[size].trims]: baseline,
        },
      )}
      activeClassName={styles.strong}
    >
      {children}
    </NavLink>
  );
};
