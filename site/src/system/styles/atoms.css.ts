import { calc } from '@vanilla-extract/css-utils';
import { mapToStyles } from '@vanilla-extract/css';
import { mapToProperty } from '../../themeUtils';
import { themeVars } from '../../themes.css';
import { mapKeys, mapValues, omit } from 'lodash';

const space = themeVars.spacing;

const negativeSpace = mapValues(
  mapKeys(omit(space, 'none'), (_, key) => `-${key}`),
  (value) => `${calc(value).negate()}`,
);

const margins = {
  ...space,
  ...negativeSpace,
};

export const margin = {
  top: mapToStyles(margins, mapToProperty('marginTop', 'mobile')),
  bottom: mapToStyles(margins, mapToProperty('marginBottom', 'mobile')),
  left: mapToStyles(margins, mapToProperty('marginLeft', 'mobile')),
  right: mapToStyles(margins, mapToProperty('marginRight', 'mobile')),
};
export const marginDesktop = {
  top: mapToStyles(margins, mapToProperty('marginTop', 'desktop')),
  bottom: mapToStyles(margins, mapToProperty('marginBottom', 'desktop')),
  left: mapToStyles(margins, mapToProperty('marginLeft', 'desktop')),
  right: mapToStyles(margins, mapToProperty('marginRight', 'desktop')),
};

export const padding = {
  top: mapToStyles(space, mapToProperty('paddingTop', 'mobile')),
  bottom: mapToStyles(space, mapToProperty('paddingBottom', 'mobile')),
  left: mapToStyles(space, mapToProperty('paddingLeft', 'mobile')),
  right: mapToStyles(space, mapToProperty('paddingRight', 'mobile')),
};
export const paddingDesktop = {
  top: mapToStyles(space, mapToProperty('paddingTop', 'desktop')),
  bottom: mapToStyles(space, mapToProperty('paddingBottom', 'desktop')),
  left: mapToStyles(space, mapToProperty('paddingLeft', 'desktop')),
  right: mapToStyles(space, mapToProperty('paddingRight', 'desktop')),
};

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
} as const;
export const display = mapToStyles(displayRules, mapToProperty('display'));
export const displayDesktop = mapToStyles(
  displayRules,
  mapToProperty('display', 'desktop'),
);

const alignItemsRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
} as const;
export const alignItems = mapToStyles(
  alignItemsRules,
  mapToProperty('alignItems'),
);
export const alignItemsDesktop = mapToStyles(
  alignItemsRules,
  mapToProperty('alignItems', 'desktop'),
);

const justifyContentRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
} as const;
export const justifyContent = mapToStyles(
  justifyContentRules,
  mapToProperty('justifyContent'),
);
export const justifyContentDesktop = mapToStyles(
  justifyContentRules,
  mapToProperty('justifyContent', 'desktop'),
);

const flexDirectionRules = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
} as const;
export const flexDirection = mapToStyles(
  flexDirectionRules,
  mapToProperty('flexDirection'),
);
export const flexDirectionDesktop = mapToStyles(
  flexDirectionRules,
  mapToProperty('flexDirection', 'desktop'),
);

const flexWrapRules = {
  wrap: 'wrap',
  nowrap: 'nowrap',
} as const;
export const flexWrap = mapToStyles(flexWrapRules, mapToProperty('flexWrap'));

const flexShrinkRules = {
  0: 0,
} as const;
export const flexShrink = mapToStyles(
  flexShrinkRules,
  mapToProperty('flexShrink'),
);

const flexGrowRules = {
  0: 0,
  1: 1,
} as const;
export const flexGrow = mapToStyles(flexGrowRules, mapToProperty('flexGrow'));

const positionRules = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
} as const;
export const position = mapToStyles(positionRules, mapToProperty('position'));

export const borderRadius = mapToStyles(
  themeVars.border.radius,
  mapToProperty('borderRadius'),
);

export const background = mapToStyles(
  themeVars.background,
  mapToProperty('background'),
);
