import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const code = style({
  fontFamily: themeVars.fonts.code,
  color: themeVars.palette.pink['700'],
  background: themeVars.palette.pink['100'],
  padding: '8px',
  margin: '-8px 4px',
  borderRadius: themeVars.border.radius.small,
});
