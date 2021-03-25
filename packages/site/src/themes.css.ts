import { createTheme } from '@mattsjones/css-core';
import { computeValues } from './capsize';
import { Breakpoint } from './themeUtils';

const grid = 4;
const px = (value: string | number) => `${value}px`;

const fontMetrics = {
  heading: {
    capHeight: 669,
    ascent: 1026,
    descent: -432,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  body: {
    capHeight: 1443,
    ascent: 1950,
    descent: -494,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  code: {
    capHeight: 1456,
    ascent: 2146,
    descent: -555,
    lineGap: 0,
    unitsPerEm: 2048,
  },
};

const calculateTypographyStyles = (
  definition: Record<Breakpoint, { fontSize: number; rows: number }>,
  type: keyof typeof fontMetrics,
) => {
  const mobile = computeValues({
    fontSize: definition.mobile.fontSize,
    leading: definition.mobile.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  const desktop = computeValues({
    fontSize: definition.desktop.fontSize,
    leading: definition.desktop.rows * grid,
    fontMetrics: fontMetrics[type],
  });

  return {
    mobile: {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
      capHeightTrim: mobile.capHeightTrim,
      baselineTrim: mobile.baselineTrim,
    },
    desktop: {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
      capHeightTrim: desktop.capHeightTrim,
      baselineTrim: desktop.baselineTrim,
    },
  };
};

export const [themeClass, themeVars] = createTheme({
  fonts: {
    heading:
      'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body:
      '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
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
    menu: '#fff',
    overlay: '#26e08a',
    code: '#1c1724',
    note: '#e3f8ff',
    blue: '#76d3ef',
  },
  border: {
    standard: '4px',
    large: '8px',
  },
});
