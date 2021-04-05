import React from 'react';
import { Link, NavLinkProps } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import classnames from 'classnames';
import * as textStyles from './typography.css';
import * as styles from './Link.css';

interface LinkProps extends NavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small';
}
export default ({
  to,
  baseline,
  size = 'standard',
  className,
  ...restProps
}: LinkProps) => {
  const classNames = classnames(
    className,
    styles.link,
    textStyles.font.body,
    textStyles.text[size].base,
    {
      [textStyles.text[size].trims]: baseline,
    },
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
