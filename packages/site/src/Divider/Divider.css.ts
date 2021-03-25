import { calc } from '@mattsjones/css-utils';
import { style } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';

export const root = style({
  height: `${calc(themeVars.grid).multiply(2)}`,
  width: 120,
  borderRadius: themeVars.border.radius.full,
  background: themeVars.background.pink,
});
