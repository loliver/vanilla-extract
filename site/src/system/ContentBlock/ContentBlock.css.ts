import { mapToProperty } from './../../themeUtils';
import { style, mapToStyles } from '@vanilla-extract/css';
import { themeVars } from '../../themes.css';

export const root = style({
  margin: '0 auto',
});

export const width = mapToStyles(
  themeVars.contentWidth,
  mapToProperty('maxWidth'),
);
