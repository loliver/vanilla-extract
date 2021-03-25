import React, { Fragment, MouseEvent, ReactNode } from 'react';
import { Box } from '../system';
import NavLink from '../Typography/NavLink';
import docs from '../docs-store';
import Link from '../Typography/Link';
import { useActiveHash } from '../useHeadingRoute';
import * as styles from './Navigation.css';

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
  <Fragment>
    <Box paddingBottom="medium">
      <NavLink size="xsmall" to={href} exact onClick={onClick}>
        {title}
      </NavLink>
    </Box>
    <Box paddingBottom="xlarge">{children}</Box>
  </Fragment>
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
    <Box
      className={styles.subLinkContainer}
      paddingLeft="large"
      paddingBottom="xsmall"
      key={hash}
    >
      {active ? <div className={styles.activeSubLinkBar} /> : null}
      <Link
        size="small"
        to={`${to}${hash ? `#${hash}` : ''}`}
        onClick={onClick}
        className={styles.subLink}
        style={
          active
            ? {
                fontWeight: 'bold',
              }
            : undefined
        }
      >
        {children}
      </Link>
    </Box>
  );
};

export default ({ onSelect }: { onSelect: () => void }) => {
  const activeHash = useActiveHash();

  const selectAndScrollToTop = () => {
    window.scrollTo(0, 0);
    onSelect();
  };

  return (
    <>
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
        href="https://www.github.com/seek-oss/treat"
      >
        <SubLink to="https://www.github.com/seek-oss/treat">GitHub</SubLink>
      </NavSection>
    </>
  );
};
