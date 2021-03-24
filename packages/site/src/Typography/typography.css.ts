import { mapToStyles } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';
import { mapToProperty } from '../themeUtils';

const makeTypographyRules = (
  textDefinition: typeof themeVars.text.standard,
) => {
  return {
    fontSize: {
      fontSize: textDefinition.mobile.fontSize,
      lineHeight: textDefinition.mobile.lineHeight,
      '@media': {
        'screen and (min-width: 1024px)': {
          fontSize: textDefinition.desktop.fontSize,
          lineHeight: textDefinition.desktop.lineHeight,
        },
      },
    },
    transform: {
      transform: textDefinition.mobile.transform,
      '@media': {
        'screen and (min-width: 768px)': {
          transform: textDefinition.desktop.transform,
        },
      },
    },
  };
};

export const font = mapToStyles(themeVars.fonts, mapToProperty('fontFamily'));
export const color = mapToStyles(themeVars.color, mapToProperty('color'));
export const weight = mapToStyles(
  themeVars.weight,
  mapToProperty('fontWeight'),
);

export const text = {
  standard: mapToStyles(makeTypographyRules(themeVars.text.standard)),
  small: mapToStyles(makeTypographyRules(themeVars.text.small)),
  xsmall: mapToStyles(makeTypographyRules(themeVars.text.xsmall)),
  code: mapToStyles(makeTypographyRules(themeVars.text.code)),
};

export const heading = {
  '1': mapToStyles(makeTypographyRules(themeVars.heading.h1)),
  '2': mapToStyles(makeTypographyRules(themeVars.heading.h2)),
  '3': mapToStyles(makeTypographyRules(themeVars.heading.h3)),
};
