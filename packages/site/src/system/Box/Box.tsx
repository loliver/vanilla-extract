import { createElement, AllHTMLAttributes, ElementType } from 'react';
import classnames from 'classnames';
import { Breakpoint } from '../../themeUtils';
import * as resetStyles from '../styles/reset.css';
import * as atomStyles from '../styles/atoms.css';

export type Space = keyof typeof atomStyles['padding']['bottom'];
export type ResponsiveSpace = ResponsiveProp<Space>;

type ResponsiveProp<AtomName> =
  | AtomName
  | { [breakpoint in Breakpoint]: AtomName };

interface BoxProps extends AllHTMLAttributes<HTMLElement> {
  component?: ElementType;
  paddingTop?: ResponsiveProp<Space>;
  paddingBottom?: ResponsiveProp<Space>;
  paddingLeft?: ResponsiveProp<Space>;
  paddingRight?: ResponsiveProp<Space>;
  marginTop?: ResponsiveProp<Space>;
  marginBottom?: ResponsiveProp<Space>;
  marginLeft?: ResponsiveProp<Space>;
  marginRight?: ResponsiveProp<Space>;
  display?: ResponsiveProp<keyof typeof atomStyles.display>;
  alignItems?: ResponsiveProp<keyof typeof atomStyles.alignItems>;
  justifyContent?: ResponsiveProp<keyof typeof atomStyles.justifyContent>;
  flexDirection?: ResponsiveProp<keyof typeof atomStyles.flexDirection>;
  flexWrap?: keyof typeof atomStyles.flexWrap;
  flexGrow?: keyof typeof atomStyles.flexGrow;
  flexShrink?: keyof typeof atomStyles.flexShrink;
}

export const resolveResponsiveProp = <Keys extends string | number>(
  value: ResponsiveProp<Keys>,
  mobileAtoms: Record<Keys, string>,
  desktopAtoms: Record<Keys, string>,
) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return mobileAtoms[value!];
  }

  const { mobile: mobileValue, desktop: desktopValue } = value;

  return `${mobileAtoms[mobileValue!]}${
    desktopValue !== mobileValue ? ` ${desktopAtoms[desktopValue!]}` : ''
  }`;
};

export const Box = ({
  component = 'div',
  className,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  ...restProps
}: BoxProps) => {
  const atomClasses = classnames(
    className,
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
    paddingTop &&
      resolveResponsiveProp(
        paddingTop,
        atomStyles.padding.top,
        atomStyles.paddingDesktop.top,
      ),
    paddingBottom &&
      resolveResponsiveProp(
        paddingBottom,
        atomStyles.padding.bottom,
        atomStyles.paddingDesktop.bottom,
      ),
    paddingLeft &&
      resolveResponsiveProp(
        paddingLeft,
        atomStyles.padding.left,
        atomStyles.paddingDesktop.left,
      ),
    paddingRight &&
      resolveResponsiveProp(
        paddingRight,
        atomStyles.padding.right,
        atomStyles.paddingDesktop.right,
      ),
    marginTop &&
      resolveResponsiveProp(
        marginTop,
        atomStyles.margin.top,
        atomStyles.marginDesktop.top,
      ),
    marginBottom &&
      resolveResponsiveProp(
        marginBottom,
        atomStyles.margin.bottom,
        atomStyles.marginDesktop.bottom,
      ),
    marginLeft &&
      resolveResponsiveProp(
        marginLeft,
        atomStyles.margin.left,
        atomStyles.marginDesktop.left,
      ),
    marginRight &&
      resolveResponsiveProp(
        marginRight,
        atomStyles.margin.right,
        atomStyles.marginDesktop.right,
      ),
    display &&
      resolveResponsiveProp(
        display,
        atomStyles.display,
        atomStyles.displayDesktop,
      ),
    alignItems &&
      resolveResponsiveProp(
        alignItems,
        atomStyles.alignItems,
        atomStyles.alignItemsDesktop,
      ),
    justifyContent &&
      resolveResponsiveProp(
        justifyContent,
        atomStyles.justifyContent,
        atomStyles.justifyContentDesktop,
      ),
    flexDirection &&
      resolveResponsiveProp(
        flexDirection,
        atomStyles.flexDirection,
        atomStyles.flexDirectionDesktop,
      ),
    atomStyles.flexWrap[flexWrap!],
    atomStyles.flexGrow[flexGrow!],
    atomStyles.flexShrink[flexShrink!],
  );

  return createElement(component, { className: atomClasses, ...restProps });
};
