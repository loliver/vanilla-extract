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
  baseline = true,
  size = 'standard',
  children,
  ...restProps
}: LinkProps) => {
  return (
    <NavLink
      {...restProps}
      className={classnames(
        linkStyles.link,
        linkStyles.strong,
        typeStyles.font.body,
        typeStyles.text[size].base,
        {
          [typeStyles.text[size].trims]: baseline,
        },
      )}
      activeClassName={linkStyles.strong}
    >
      {children}
    </NavLink>
  );
};
