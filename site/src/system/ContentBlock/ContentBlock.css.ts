import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

export const root = style({
  maxWidth: themeVars.contentWidth,
  margin: '0 auto',
});
