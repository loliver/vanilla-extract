import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

export const button = style({
  textDecoration: 'none',
  padding: `${themeVars.spacing.medium} ${themeVars.spacing.large}`,
  borderRadius: themeVars.border.radius.large,
  fontSize: themeVars.text.standard.mobile.fontSize,
  fontFamily: themeVars.fonts.body,
  transition: 'transform .15s ease',
  display: 'flex',
  alignItems: 'center',
  ':active': {
    transform: 'scale(.98) translateZ(0)',
  },
  ':focus': {
    outline: 'none',
  },
  ':visited': {
    color: 'currentColor',
  },
});

export const solid = style({
  background: 'black',
  color: 'white',
  boxShadow: `0px 0px 12px 0px rgba(0,0,0,0.4)`,
  ':focus': {
    boxShadow: `0px 0px 0px 5px ${themeVars.palette.pink[500]}`,
  },
  ':visited': {
    color: 'white',
  },
});

export const transparent = style({
  ':hover': {
    background: 'rgba(255,255,255,.5)',
  },
  ':focus': {
    boxShadow: `0px 0px 0px 5px ${themeVars.palette.blue[300]}`,
  },
});
