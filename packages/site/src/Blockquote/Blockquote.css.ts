import { globalStyle, style } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';

export const root = style({
  borderLeft: `${themeVars.border.large} solid ${themeVars.background.blue}`,
  background: themeVars.background.note,
  borderRadius: themeVars.border.large,
});

globalStyle(`${root} *`, {
  color: '#127999',
});
