import { style } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';

export const root = style({
  borderLeft: `${themeVars.border.standard} solid ${themeVars.color.neutral}`,
  background: themeVars.background.note,
});
