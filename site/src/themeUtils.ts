import { isEqual, omit } from 'lodash';
import { StyleRule } from '@vanilla-extract/css';
import { Properties, SimplePseudos } from 'csstype';

export const breakpoints = {
  mobile: 0,
  desktop: 1024,
};

export type Breakpoint = keyof typeof breakpoints;

const makeMediaQuery = (breakpoint: keyof typeof breakpoints) => (
  styles: Properties<string | number>,
) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      };

const mediaQuery = {
  desktop: makeMediaQuery('desktop'),
};

type CSSProps = Properties<string | number> &
  { [P in SimplePseudos]?: Properties<string | number> };

interface ResponsiveStyle {
  mobile?: CSSProps;
  desktop?: CSSProps;
}

export const responsiveStyle = ({
  mobile,
  desktop,
}: ResponsiveStyle): StyleRule => {
  const mobileStyles = omit(mobile, '@media');

  const desktopStyles =
    !desktop || isEqual(desktop, mobileStyles) ? null : desktop;

  const hasMediaQueries = desktopStyles;

  return {
    ...mobileStyles,
    ...(hasMediaQueries
      ? {
          '@media': {
            ...(desktopStyles ? mediaQuery.desktop(desktopStyles) : {}),
          },
        }
      : {}),
  };
};

export const mapToProperty = <
  Property extends keyof Properties<string | number>
>(
  property: Property,
  breakpoint?: Breakpoint,
) => (value: string | number) => {
  const styleRule = { [property]: value };

  return breakpoint ? responsiveStyle({ [breakpoint]: styleRule }) : styleRule;
};
