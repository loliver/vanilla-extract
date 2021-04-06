import React from 'react';
import { Link, NavLinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classnames from 'classnames';
import { useTextStyles } from './Text';

interface LinkProps extends NavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small';
}
export default ({
  to,
  baseline = false,
  size = 'standard',
  className,
  ...restProps
}: LinkProps) => {
  const classNames = classnames(
    className,
    useTextStyles({ size, color: 'link', baseline }),
  );

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
