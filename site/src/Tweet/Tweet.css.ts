import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const tweetLink = style({
  ':hover': {
    textDecoration: 'none',
  },
  ':focus': {
    outline: 'none',
  },
});

export const tweet = style({
  width: 400,
  boxShadow: `0 0 30px -10px ${themeVars.palette.blue[300]}`,
  selectors: {
    [`${tweetLink}:focus &`]: {
      boxShadow: `0 0 30px -10px ${themeVars.palette.pink[400]}`,
    },
  },
});

export const avatar = style({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  height: 60,
  width: 60,
  overflow: 'hidden',
});
