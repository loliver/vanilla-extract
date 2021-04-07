import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const root = style({
  borderLeft: `${themeVars.border.width.large} solid ${themeVars.palette.blue[400]}`,
});

globalStyle(`${root} *`, {
  color: themeVars.palette.blue[600],
  background: themeVars.background.blue,
});
