import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const underlineOnHover = style({
  selectors: {
    ['&:not(:hover)']: {
      textDecoration: 'none',
    },
  },
});

export const highlightOnHover = style({
  ':hover': {
    color: themeVars.palette.pink[500],
  },
  ':focus': {
    outline: 'none',
    color: themeVars.palette.pink[500],
  },
});
