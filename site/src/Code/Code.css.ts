import { style, globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const root = style({
  backgroundColor: themeVars.background.code,
  borderRadius: themeVars.border.width.large,
  overflowX: 'auto',
});

const tokenSelector = (tokenName: string) => `${root} .${tokenName}`;

globalStyle(tokenSelector('comment'), {
  color: themeVars.palette.grey[500],
});

globalStyle(['keyword', 'selector'].map(tokenSelector).join(', '), {
  color: themeVars.palette.blue[200],
});

globalStyle(tokenSelector('string'), {
  color: themeVars.palette.green[200],
});

globalStyle(tokenSelector('variable'), {
  color: 'red',
});

globalStyle(tokenSelector('property'), {
  color: 'blue',
});

globalStyle(tokenSelector('function'), {
  color: themeVars.palette.pink[300],
});

globalStyle(['punctuation', 'operator'].map(tokenSelector).join(', '), {
  color: themeVars.palette.grey[400],
});
