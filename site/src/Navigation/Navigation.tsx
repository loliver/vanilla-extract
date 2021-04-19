import React, { MouseEvent, ReactNode } from 'react';
import {
  NavLink as ReactRouterNavLink,
  NavLinkProps as ReactRouterNavLinkProps,
} from 'react-router-dom';
import classnames from 'classnames';
import { Box, Stack } from '../system';
import docs from '../docs-store';
import Link from '../Typography/Link';
import { useTextStyles } from '../Typography/Text';
import { useActiveHash } from '../useHeadingRoute';
import * as styles from './Navigation.css';

interface NavLinkProps extends ReactRouterNavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small' | 'xsmall';
}
const NavLink = ({
  baseline = false,
  size = 'standard',
  children,
  ...restProps
}: NavLinkProps) => {
  return (
    <ReactRouterNavLink
      {...restProps}
      className={classnames(
        styles.sectionLinkTitle,
        styles.underlineOnHover,
        useTextStyles({ size, baseline }),
      )}
    >
      <Box component="span" display="block" paddingY="xsmall">
        {children}
      </Box>
    </ReactRouterNavLink>
  );
};

const NavSection = ({
  href,
  title,
  children,
  onClick,
}: {
  href: string;
  title: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <>
    <NavLink to={href} exact onClick={onClick}>
      {title}
    </NavLink>
    {children}
  </>
);

const SubLink = ({
  children,
  to,
  hash,
  active,
  onClick,
}: {
  children: ReactNode;
  to: string;
  hash?: string;
  active?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <Link
      size="small"
      to={`${to}${hash ? `#${hash}` : ''}`}
      onClick={onClick}
      style={
        active
          ? {
              fontWeight: 'bold',
            }
          : undefined
      }
    >
      <Box
        className={styles.subLinkContainer}
        paddingLeft="xlarge"
        paddingY="xsmall"
        key={hash}
      >
        <Box
          className={classnames(
            styles.activeIndicator,
            active ? styles.active : '',
          )}
        />
        {children}
      </Box>
    </Link>
  );
};

export default ({ onSelect }: { onSelect: () => void }) => {
  const activeHash = useActiveHash();

  const selectAndScrollToTop = () => {
    window.scrollTo(0, 0);
    onSelect();
  };

  return (
    <Stack space="xlarge">
      {docs.map(({ title, route, sections }) => (
        <NavSection
          key={route}
          title={title}
          href={route}
          onClick={selectAndScrollToTop}
        >
          {sections
            .filter(({ level }) => level === 2)
            .map(({ hash, name }) => (
              <SubLink
                key={name}
                to={route}
                hash={hash}
                active={hash === activeHash}
                onClick={onSelect}
              >
                {name}
              </SubLink>
            ))}
        </NavSection>
      ))}
      <NavSection
        title="Community"
        href="https://github.com/seek-oss/vanilla-extract"
      >
        <SubLink to="https://github.com/seek-oss/vanilla-extract">
          GitHub
        </SubLink>
        <SubLink to="https://github.com/seek-oss/vanilla-extract/discussions">
          Discussions
        </SubLink>
      </NavSection>
    </Stack>
  );
};
