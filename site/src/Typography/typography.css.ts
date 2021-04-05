import { mapToStyles } from '@vanilla-extract/css';
import { createCss } from '../capsize';
import { themeVars } from '../themes.css';
import { mapToProperty } from '../themeUtils';

const makeTypographyRules = (
  textDefinition: typeof themeVars.text.standard,
) => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobileTrims
  } = createCss(textDefinition.mobile);

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...desktopTrims
  } = createCss(textDefinition.desktop);

  return {
    base: {
      fontSize: textDefinition.mobile.fontSize,
      lineHeight: textDefinition.mobile.lineHeight,
      '@media': {
        'screen and (min-width: 1024px)': {
          fontSize: textDefinition.desktop.fontSize,
          lineHeight: textDefinition.desktop.lineHeight,
        },
      },
    },
    trims: {
      ...mobileTrims,
      '@media': {
        'screen and (min-width: 768px)': desktopTrims,
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
