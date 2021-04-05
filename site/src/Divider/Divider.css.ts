import { calc } from '@vanilla-extract/css-utils';
import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const root = style({
  height: `${calc(themeVars.grid).multiply(2)}`,
  width: 120,
  borderRadius: themeVars.border.radius.full,
  background: themeVars.background.pink,
});
