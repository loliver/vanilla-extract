import { style } from '@vanilla-extract/css';

export const root = style({
  transition: 'all .15s ease',
  fill: 'currentcolor',
  position: 'relative',
  top: '1px',
});

export const direction = {
  down: null,
  up: style({ transform: 'rotate(180deg)' }),
  left: style({ transform: 'rotate(90deg)' }),
  right: style({ transform: 'rotate(270deg)' }),
};
