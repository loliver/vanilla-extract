import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classnames from 'classnames';
import * as typeStyles from './typography.css';
import * as linkStyles from './NavLink.css';

interface LinkProps extends NavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small' | 'xsmall';
}
export default ({
  baseline,
  size = 'standard',
  children,
  ...restProps
}: LinkProps) => {
  return (
    <NavLink
      {...restProps}
      className={classnames(
        linkStyles.link,
        typeStyles.font.body,
        typeStyles.text[size].fontSize,
        {
          [typeStyles.text[size].transform]: baseline,
        },
      )}
      activeClassName={linkStyles.active}
    >
      {children}
    </NavLink>
  );
};
