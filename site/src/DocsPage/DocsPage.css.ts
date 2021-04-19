import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

const headerHeight = '120px';
const contentWidth = '1200px';
const sidebarWidth = '300px';

export const homeLink = style({
  textDecoration: 'none',
  ':focus': {
    outline: 'none',
    filter: `drop-shadow(2px 4px 2px ${themeVars.palette.pink[600]})`,
  },
});

export const header = style({
  height: headerHeight,
  zIndex: 1,
  ':after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: '100vw',
    height: '100px',
    left: 0,
    top: 0,
    bottom: '-30px',
    background: themeVars.background.green,
    clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 100%)',
    opacity: 0.8,
    backdropFilter: 'blur(4px)',
  },
  '@media': {
    'screen and (min-width: 1024px)': {
      position: 'fixed',
    },
  },
});

export const container = style({
  minHeight: `calc(100% - ${headerHeight})`,
  margin: '0 auto',
  maxWidth: contentWidth,
  paddingBottom: 200,
  paddingTop: themeVars.spacing.xlarge,
  '@media': {
    'screen and (min-width: 1024px)': {
      paddingTop: headerHeight,
    },
  },
});

export const sidebarOpen = style({
  zIndex: 1,
});

export const sidebar = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  width: '40vw',
  minWidth: sidebarWidth,
  transition: 'transform .15s ease, opacity .15s ease',
  background: themeVars.background.menu,
  ':before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    left: '-30px',
    top: 0,
    bottom: 0,
    width: '50px',
    background: themeVars.background.menu,
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 60% 0)',
  },

  '@media': {
    'screen and (min-width: 1024px)': {
      background: 'none',
      top: headerHeight,
      right: 'initial',
      width: sidebarWidth,
    },
  },

  selectors: {
    [`:not(${sidebarOpen})&`]: {
      '@media': {
        'screen and (max-width: 1023px)': {
          transform: 'translateX(12px)',
          pointerEvents: 'none',
          opacity: 0,
        },
      },
    },
  },
});

export const main = style({
  '@media': {
    'screen and (min-width: 1024px)': {
      marginLeft: sidebarWidth,
      paddingLeft: 30,
    },
  },
});

export const backdrop = style({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: themeVars.background.green,
  zIndex: 1,
  transition: 'opacity 0.1s ease',
  backdropFilter: 'blur(4px)',
  '@media': {
    'screen and (min-width: 1024px)': {
      pointerEvents: 'none',
      display: 'none',
    },
  },
});

export const backdrop_isHidden = style({
  opacity: 0,
  pointerEvents: 'none',
});

export const backdrop_isVisible = style({
  opacity: 0.8,
  pointerEvents: 'auto',
});
