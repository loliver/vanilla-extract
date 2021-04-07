import React from 'react';
import { Link, NavLinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classnames from 'classnames';
import { useTextStyles } from './Text';
import * as styles from './Link.css';

interface LinkProps extends NavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small';
  underline?: 'always' | 'hover';
  variant?: 'link' | 'button';
}
export default ({
  to,
  baseline = false,
  size = 'standard',
  underline = 'hover',
  variant = 'link',
  className,
  ...restProps
}: LinkProps) => {
  const classNames =
    variant === 'link'
      ? classnames(
          underline === 'hover' ? styles.underlineOnHover : undefined,
          useTextStyles({ size, color: 'link', baseline }),
        )
      : styles.button;

  if (typeof to === 'string' && /^http/.test(to)) {
    return <a href={to} {...restProps} className={classNames} />;
  }

  if (typeof to === 'string' && to.indexOf('#') > -1) {
    return <HashLink to={to} {...restProps} className={classNames} />;
  }

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={to}
      {...restProps}
      className={classNames}
    />
  );
};
