import { calc } from '@vanilla-extract/css-utils';
import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const sectionLinkTitle = style({
  textTransform: 'uppercase',
  fontStyle: 'italic',
  fontFamily: themeVars.fonts.code,
});

export const underlineOnHover = style({
  selectors: {
    ['&:not(:hover)']: {
      textDecoration: 'none',
    },
  },
});

export const active = style({});

export const activeIndicator = style({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: `${calc(themeVars.spacing.large).negate()}`,
  right: 0,
  bottom: 0,
  backgroundColor: themeVars.palette.green[100],
  borderTopRightRadius: themeVars.border.radius.full,
  borderBottomRightRadius: themeVars.border.radius.full,
  transition: 'transform .3s ease, opacity .3s ease',
  selectors: {
    [`&:not(${active})`]: {
      opacity: 0,
      transform: 'translateX(-80%)',
    },
  },
});

export const subLinkContainer = style({
  position: 'relative',
});
