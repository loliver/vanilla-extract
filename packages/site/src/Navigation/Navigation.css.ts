import { style } from '@mattsjones/css-core';

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
  borderRadius: '9999px',
  backgroundColor: '#26e08a',
});
