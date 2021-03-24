import { calc as styles } from '@mattsjones/css-utils';
import { themeVars } from './themes.css';
import { globalStyle, style } from '@mattsjones/css-core';

globalStyle('html, body', { margin: 0, padding: 0 });

export const content = style({
  '@media': {
    'screen and (min-width: 1024px)': {
      paddingLeft: `${styles(themeVars.grid).multiply(67)}`,
    },
  },
});
