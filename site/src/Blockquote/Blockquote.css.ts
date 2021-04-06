import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const root = style({
  borderLeft: `${themeVars.border.width.large} solid ${themeVars.background.blue}`,
  background: themeVars.background.note,
  borderRadius: themeVars.border.width.large,
});

globalStyle(`${root} *`, {
  color: themeVars.palette.blue[600],
  background: themeVars.background.note,
});
