import { createTheme } from '@mattsjones/css-core';
import basekick from 'basekick';
import { Breakpoint } from './themeUtils';

const grid = 4;
const px = (value: string | number) => `${value}px`;

const fontMetrics = {
  heading: {
    descenderHeightScale: 0.12,
    gridRowHeight: grid,
    // capHeight: 700,
    // ascent: 992,
    // descent: -310,
    // lineGap: 0,
    // unitsPerEm: 1000,
  },
  body: {
    descenderHeightScale: 0.16,
    gridRowHeight: grid,
    // capHeight: 1456,
    // ascent: 1900,
    // descent: -500,
    // lineGap: 0,
    // unitsPerEm: 2048,
  },
  code: {
    descenderHeightScale: 0.16,
    gridRowHeight: grid,
    // capHeight: 1456,
    // ascent: 2146,
    // descent: -555,
    // lineGap: 0,
    // unitsPerEm: 2048,
  },
};

const calculateTypographyStyles = (
  definition: Record<Breakpoint, { fontSize: number; rows: number }>,
  type: keyof typeof fontMetrics,
) => {
  const mobile = basekick({
    baseFontSize: 1,
    typeSizeModifier: definition.mobile.fontSize,
    typeRowSpan: definition.mobile.rows,
    ...fontMetrics[type],
  });

  const desktop = basekick({
    baseFontSize: 1,
    typeSizeModifier: definition.desktop.fontSize,
    typeRowSpan: definition.desktop.rows,
    ...fontMetrics[type],
  });

  return {
    mobile: {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      transform: mobile.transform,
    },
    desktop: {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
      transform: desktop.transform,
    },
  };
};

export const [themeClass, themeVars] = createTheme({
  fonts: {
    heading:
      '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body:
      'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: '"Roboto Mono", Menlo, monospace',
  },
  grid: px(grid),
  spacing: {
    none: '0',
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(9 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(20 * grid),
  },
  contentWidth: px(860),
  heading: {
    h1: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 36,
          rows: 12,
        },
        desktop: {
          fontSize: 52,
          rows: 15,
        },
      },
      'heading',
    ),
    h2: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 28,
          rows: 10,
        },
        desktop: {
          fontSize: 38,
          rows: 12,
        },
      },
      'heading',
    ),
    h3: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 22,
          rows: 8,
        },
        desktop: {
          fontSize: 30,
          rows: 10,
        },
      },
      'heading',
    ),
  },
  text: {
    standard: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 18,
          rows: 8,
        },
        desktop: {
          fontSize: 20,
          rows: 9,
        },
      },
      'body',
    ),
    code: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 14,
          rows: 6,
        },
        desktop: {
          fontSize: 16,
          rows: 8,
        },
      },
      'body',
    ),
    small: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 18,
          rows: 9,
        },
        desktop: {
          fontSize: 16,
          rows: 8,
        },
      },
      'body',
    ),
    xsmall: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 15,
          rows: 7,
        },
        desktop: {
          fontSize: 15,
          rows: 7,
        },
      },
      'body',
    ),
  },
  weight: {
    regular: '400',
    strong: '700',
  },
  color: {
    strong: '#26232c',
    neutral: '#46444b',
    code: '#fff',
  },
  background: {
    body: '#fff',
    menu: 'linear-gradient(0deg, #f5efff, #dbeeff)',
    overlay: '#fff',
    code: '#1c1724',
    note: '#f9f8fa',
  },
  border: {
    standard: '3px',
  },
});
