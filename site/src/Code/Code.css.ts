import { style, globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const root = style({
  backgroundColor: themeVars.background.code,
  borderRadius: themeVars.border.width.large,
  overflowX: 'auto',
  color: themeVars.color.code,
});

const tokenSelector = (...tokens: Array<string>) =>
  tokens.map((t) => `${root} .${t}`).join(', ');

globalStyle(`${root} code`, {
  color: themeVars.color.code,
  backgroundColor: themeVars.background.code,
  padding: 0,
  margin: 0,
});

globalStyle(tokenSelector('comment'), {
  color: themeVars.palette.grey[500],
});

globalStyle(tokenSelector('keyword', 'selector'), {
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

globalStyle(tokenSelector('function', 'property'), {
  color: themeVars.palette.pink[300],
});

globalStyle(tokenSelector('punctuation', 'operator'), {
  color: themeVars.palette.grey[400],
});
