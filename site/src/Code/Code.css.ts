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

globalStyle(tokenSelector('function', 'property'), {
  color: themeVars.palette.pink[300],
});

globalStyle(tokenSelector('punctuation', 'operator'), {
  color: themeVars.palette.grey[400],
});

export const theme = {
  'code[class*="language-"]': {
    whiteSpace: 'pre',
    color: themeVars.color.code,
    lineHeight: '24px',
  },
  'pre[class*="language-"]': {
    whiteSpace: 'pre',
    margin: 0,
  },
  comment: {
    color: themeVars.palette.grey[500],
  },
  keyword: {
    color: themeVars.palette.blue[200],
  },
  selector: {
    color: themeVars.palette.blue[200],
  },
  string: {
    color: themeVars.palette.green[200],
  },
  function: {
    color: themeVars.palette.pink[300],
  },
  property: {
    color: themeVars.palette.pink[300],
  },
  punctuation: {
    color: themeVars.palette.grey[400],
  },
  operator: {
    color: themeVars.palette.grey[400],
  },
};
