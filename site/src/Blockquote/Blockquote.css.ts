import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const root = style({
  borderLeft: `${themeVars.border.width.large} solid ${themeVars.palette.blue[400]}`,
});

globalStyle(`${root} code`, {
  background: themeVars.palette.blue[200],
});

globalStyle(`${root} *`, {
  color: themeVars.palette.blue[600],
});
