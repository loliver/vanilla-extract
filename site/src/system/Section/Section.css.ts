import { style } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

export const root = style({
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 1024px)': {
      maxWidth: themeVars.contentWidth,
    },
  },
});
