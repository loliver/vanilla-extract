import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const underlineOnHover = style({
  selectors: {
    ['&:not(:hover)']: {
      textDecoration: 'none',
    },
  },
});

export const button = style({
  textDecoration: 'none',
  padding: `${themeVars.spacing.medium} ${themeVars.spacing.large}`,
  background: 'black',
  color: 'white',
  borderRadius: themeVars.border.radius.large,
  fontSize: themeVars.text.standard.mobile.fontSize,
  fontFamily: themeVars.fonts.body,
  boxShadow: `0px 0px 12px 0px rgba(0,0,0,0.4)`,
  transition: 'transform .15s ease',
  display: 'block',
  ':active': {
    transform: 'scale(.98) translateZ(0)',
  },
});
