import { globalStyle, style } from '@vanilla-extract/css';
import { themeVars } from './themes.css';

globalStyle('html, body', { margin: 0, padding: 0 });

const headerHeight = '120px';
const contentWidth = '1200px';
const sidebarWidth = '300px';

export const fixed = style({
  height: headerHeight,
  '@media': {
    'screen and (min-width: 1024px)': {
      position: 'fixed',
    },
  },
});

export const elevate = style({
  position: 'relative',
  boxShadow: `0 -10px 20px 0 ${themeVars.palette.green[700]}`,
});

export const container = style({
  minHeight: `calc(100% - ${headerHeight})`,
  margin: '0 auto',
  maxWidth: contentWidth,
  paddingBottom: 200,
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
  overflow: 'auto',
  transition: 'transform .15s ease, opacity .15s ease',
  background: themeVars.background.menu,

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
  opacity: 0.7,
  pointerEvents: 'auto',
});
