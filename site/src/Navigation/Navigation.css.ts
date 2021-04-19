import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const sectionLinkTitle = style({
  textTransform: 'uppercase',
});

export const active = style({});

export const activeIndicator = style({
  backgroundColor: themeVars.background.green,
  zIndex: -1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  transition: 'transform .3s ease, opacity .3s ease',
  clipPath: 'polygon(0 0, 84% 0, 100% 100%, 6% 100%)',
  selectors: {
    [`&:not(${active})`]: {
      opacity: 0,
      transform: 'translateX(-80%)',
    },
  },
});
