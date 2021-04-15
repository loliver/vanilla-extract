import { createTheme } from '@vanilla-extract/css';
import { computeValues } from './capsize';
import { Breakpoint } from './themeUtils';

const grid = 4;
const px = (value: string | number) => `${value}px`;

const fontMetrics = {
  brand: {
    capHeight: 669,
    ascent: 1026,
    descent: -432,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  heading: {
    capHeight: 700,
    ascent: 992,
    descent: -310,
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

const palette = {
  // https://hihayk.github.io/scale/#3/3/50/80/0/0/100/29/8991a5/137/145/165/white
  grey: {
    700: '#434855',
    600: '#5A6070',
    500: '#71788B',
    400: '#8991a5',
    300: '#A5ADC0',
    200: '#C4CAD9',
    100: '#E5E8F0',
  },
  // https://hihayk.github.io/scale/#3/3/44/80/0/0/100/29/76C0FF/118/190/255/white
  // Customised 600 for a11y
  blue: {
    700: '#376C8F',
    600: '#437CA4',
    500: '#5FA4DA',
    400: '#76C0FF',
    300: '#8AD2FF',
    200: '#AAE3FF',
    100: '#D6F4FF',
  },
  // https://hihayk.github.io/scale/#3/3/44/80/0/0/20/44/F090F5/240/144/245/white
  pink: {
    700: '#8F448F',
    600: '#B35BB4',
    500: '#D375D7',
    400: '#F090F5',
    300: '#F6ABFA',
    200: '#FBC8FE',
    100: '#FEE7FF',
  },
  // https://hihayk.github.io/scale/#3/3/44/80/0/0/20/-20/26E08A/38/224/138/white
  green: {
    700: '#20734D',
    600: '#249661',
    500: '#26BA75',
    400: '#26E08A',
    300: '#5BEDAA',
    200: '#94F6C9',
    100: '#D0FDE8',
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
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    heading:
      '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
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
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(20 * grid),
  },
  contentWidth: {
    standard: px(860),
    large: px(1350),
  },
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
    h4: calculateTypographyStyles(
      {
        mobile: {
          fontSize: 18,
          rows: 8,
        },
        desktop: {
          fontSize: 22,
          rows: 9,
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
          fontSize: 16,
          rows: 8,
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
    neutral: palette.grey[700],
    code: palette.grey[100],
    link: palette.grey[700],
  },
  background: {
    body: '#fff',
    menu: '#fff',
    code: '#1c1724',
    blue: palette.blue[100],
    pink: palette.pink[100],
    green: palette.green[100],
  },
  palette,
  border: {
    width: {
      standard: px(1 * grid),
      large: px(2 * grid),
    },
    radius: {
      small: px(2 * grid),
      medium: px(4 * grid),
      large: px(7 * grid),
      full: '9999px',
    },
  },
});
