import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';
import { responsiveStyle } from '../themeUtils';

export const featureKeyLine = style({
  left: 0,
  top: 0,
  background: themeVars.palette.pink[200],
  transform: 'skew(15deg)',
  ...responsiveStyle({
    mobile: { height: themeVars.text.standard.mobile.lineHeight },
    desktop: { height: themeVars.text.standard.desktop.lineHeight },
  }),
});

// linear-gradient(transparent, var(--background-green__6cbmls91) 60%),
// radial-gradient(var(--palette-pink-100__6cbmls106), transparent) 100px 100px / 15px 30px
export const skewedContainer = style({
  background: `linear-gradient(transparent, ${themeVars.background.green} 60%)`,
  ':after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: '110vw',
    left: '-10vw',
    height: '120px',
    background: themeVars.background.green,
    transform: 'rotate(-2deg)',
  },
});
