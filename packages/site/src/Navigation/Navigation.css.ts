import { style } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';

export const subLink = style({
  selectors: {
    ['&:not(:hover)']: {
      textDecoration: 'none',
    },
  },
});

export const subLinkContainer = style({
  position: 'relative',
});

export const activeSubLinkBar = style({
  position: 'absolute',
  left: 0,
  top: 2,
  bottom: 2,
  width: 4,
  borderRadius: themeVars.border.radius.full,
  backgroundColor: themeVars.background.green,
});
