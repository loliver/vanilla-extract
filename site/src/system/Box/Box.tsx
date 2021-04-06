import { createElement, AllHTMLAttributes, ElementType } from 'react';
import classnames from 'classnames';
import { Breakpoint } from '../../themeUtils';
import * as resetStyles from '../styles/reset.css';
import * as atomStyles from '../styles/atoms.css';

export type Space = keyof typeof atomStyles['padding']['bottom'];

type ResponsiveProp<AtomName> =
  | AtomName
  | { [breakpoint in Breakpoint]: AtomName };

export interface BoxProps extends AllHTMLAttributes<HTMLElement> {
  component?: ElementType;
  padding?: ResponsiveProp<Space>;
  paddingX?: ResponsiveProp<Space>;
  paddingY?: ResponsiveProp<Space>;
  paddingTop?: ResponsiveProp<Space>;
  paddingBottom?: ResponsiveProp<Space>;
  paddingLeft?: ResponsiveProp<Space>;
  paddingRight?: ResponsiveProp<Space>;
  margin?: ResponsiveProp<Space>;
  marginX?: ResponsiveProp<Space>;
  marginY?: ResponsiveProp<Space>;
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
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
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
  const resolvedPaddingTop = paddingTop || paddingY || padding;
  const resolvedPaddingBottom = paddingBottom || paddingY || padding;
  const resolvedPaddingLeft = paddingLeft || paddingX || padding;
  const resolvedPaddingRight = paddingRight || paddingX || padding;

  const resolvedMarginTop = marginTop || marginY || margin;
  const resolvedMarginBottom = marginBottom || marginY || margin;
  const resolvedMarginLeft = marginLeft || marginX || margin;
  const resolvedMarginRight = marginRight || marginX || margin;

  const atomClasses = classnames(
    className,
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
    resolvedPaddingTop &&
      resolveResponsiveProp(
        resolvedPaddingTop,
        atomStyles.padding.top,
        atomStyles.paddingDesktop.top,
      ),
    resolvedPaddingBottom &&
      resolveResponsiveProp(
        resolvedPaddingBottom,
        atomStyles.padding.bottom,
        atomStyles.paddingDesktop.bottom,
      ),
    resolvedPaddingLeft &&
      resolveResponsiveProp(
        resolvedPaddingLeft,
        atomStyles.padding.left,
        atomStyles.paddingDesktop.left,
      ),
    resolvedPaddingRight &&
      resolveResponsiveProp(
        resolvedPaddingRight,
        atomStyles.padding.right,
        atomStyles.paddingDesktop.right,
      ),
    resolvedMarginTop &&
      resolveResponsiveProp(
        resolvedMarginTop,
        atomStyles.margin.top,
        atomStyles.marginDesktop.top,
      ),
    resolvedMarginBottom &&
      resolveResponsiveProp(
        resolvedMarginBottom,
        atomStyles.margin.bottom,
        atomStyles.marginDesktop.bottom,
      ),
    resolvedMarginLeft &&
      resolveResponsiveProp(
        resolvedMarginLeft,
        atomStyles.margin.left,
        atomStyles.marginDesktop.left,
      ),
    resolvedMarginRight &&
      resolveResponsiveProp(
        resolvedMarginRight,
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
