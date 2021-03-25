---
title: API
---

# API

## style

Creates styles attached to a locally scoped class name.

```tsx
import { style } from '@mattsjones/css-core';

export const className = style({
  display: 'flex'
});
```

CSS Variables (custom properties), simple pseudos, selectors and media/feature queries are all supported.

```tsx
import { style } from '@mattsjones/css-core';

export const className = style({
  display: 'flex',
  vars: {
    '--global-variable': 'purple'
  },
  ':hover': {
    color: 'red'
  },
  selectors: {
    '&:nth-child(2n)': {
      background: '#fafafa'
    }
  },
  '@media': {
    'screen and (min-width: 768px)': {
      padding: 10
    }
  },
  '@supports': {
    '(display: grid)': {
      display: 'grid'
    }
  }
});
```

Selectors can also contain references to other scoped class names.

```tsx
import { style } from '@mattsjones/css-core';

export const parentClass = style({});

export const childClass = style({
  selectors: {
    [`${parentClass}:focus &`]: {
      background: '#fafafa'
    }
  },
});
```

## globalStyle

Creates styles attached to a global selector.

```tsx
import { globalStyle } from '@mattsjones/css-core';

globalStyle('html, body', {
  margin: 0
});
```

## mapToStyles

Creates an object that maps style names to hashed class names.

> 💡 This is useful for mapping to component props, e.g. `<div className={styles.padding[props.padding]}>`

```ts
import { mapToStyles } from '@mattsjones/css-core';

export const padding = mapToStyles({
  small: { padding: 4 },
  medium: { padding: 8 },
  large: { padding: 16 }
});
```

You can also transform the values by providing a map function as the second argument.

```ts
import { mapToStyles } from '@mattsjones/css-core';

const spaceScale = {
  small: 4,
  medium: 8,
  large: 16
};

export const padding = mapToStyles(spaceScale, (space) => ({
  padding: space
}));
```

## createTheme

Creates a locally scoped theme class and a collection of scoped CSS Variables.

```tsx
import { createTheme, style } from '@mattsjones/css-core';

export const [themeClass, themeVars] = createTheme({
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});
```

You can create theme variants by passing a collection of theme variables as the first argument to `createTheme`.

```tsx
import { createTheme, style } from '@mattsjones/css-core';

export const [themeA, themeVars] = createTheme({
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

export const themeB = createTheme(themeVars, {
  color: {
    brand: 'pink'
  },
  font: {
    body: 'comic sans ms'
  }
});
```

> 💡 All theme variants must provide a value for every variable or it’s a type error.

## createGlobalTheme

Creates a theme attached to a global selector, but with locally scoped variable names.

```tsx
import { createGlobalTheme } from '@mattsjones/css-core';

export const themeVars = createGlobalTheme(':root', {
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});
```

> 💡 All theme variants must provide a value for every variable or it’s a type error.

## createInlineTheme

Generates a custom theme at runtime as an inline style object.

```ts
import { createInlineTheme } from '@mattsjones/css-core';
import { themeVars, exampleStyle } from './styles.css.ts';

const customTheme = createInlineTheme(themeVars, {
  small: 4,
  medium: 8,
  large: 16
});

document.write(`
  <section style="${customTheme}">
    <h1 class="${exampleStyle}">Hello world!</h1>
  </section>
`);
```

## createThemeVars

Creates a collection of CSS Variables without coupling them to a specific theme variant.

> 💡 This is useful if you want to split your themes into different bundles. In this case, your themes would be defined in separate files, but we'll keep this example simple.

```tsx
import {
  createThemeVars,
  createTheme
} from '@mattsjones/css-core';

export const themeVars = createThemeVars({
  color: {
    brand: null
  },
  font: {
    body: null
  }
});

export const themeA = createTheme(themeVars, {
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

export const themeB = createTheme(themeVars, {
  color: {
    brand: 'pink'
  },
  font: {
    body: 'comic sans ms'
  }
});
```

## assignVars

Allows you to set an entire collection of CSS Variables anywhere within a style block.

> 💡 This is useful for creating responsive themes since it can be used within an `@media` block.

```ts
import { style, assignVars } from '@mattsjones/css-core';
import { themeVars } from './vars.css.ts';

export const exampleStyle = style({
  vars: assignVars(themeVars.space, {
    small: 4,
    medium: 8,
    large: 16
  }),
  '@media': {
    'screen and (min-width: 1024px)': {
      vars: assignVars(themeVars.space, {
        small: 8,
        medium: 16,
        large: 32
      })
    }
  }
});
```

> 💡 All variables passed into this function must be assigned or it’s a type error.

## createVar

Creates a single CSS Variable.

```ts
import { createVar, style } from '@mattsjones/css-core';

export const colorVar = createVar();

export const exampleStyle = style({
  color: colorVar
});
```

Scoped variables can be set via the `vars` property on style objects.

```ts
import { createVar, style } from '@mattsjones/css-core';
import { colorVar } from './vars.css.ts';

export const parentStyle = style({
  vars: {
    [colorVar]: 'blue'
  }
});
```

## fallbackVar

Provides fallback values when consuming variables.

```ts
import { createVar, fallbackVar, style } from '@mattsjones/css-core';

export const colorVar = createVar();

export const exampleStyle = style({
  color: fallbackVar(colorVar, 'blue');
});
```

Multiple fallbacks are also supported.

```ts
import { createVar, fallbackVar, style } from '@mattsjones/css-core';

export const primaryColorVar = createVar();
export const secondaryColorVar = createVar();

export const exampleStyle = style({
  color: fallbackVar(primaryColorVar, secondaryColorVar, 'blue');
});
```

## fontFace

Creates a custom font attached to a locally scoped font name.

```tsx
import { fontFace, style } from '@mattsjones/css-core';

const myFont = fontFace({
  src: 'local("Comic Sans MS")'
});

export const text = style({
  fontFamily: myFont
});
```

## globalFontFace

Creates a globally scoped custom font.

```tsx
import {
  globalFontFace,
  style
} from '@mattsjones/css-core';

globalFontFace('MyGlobalFont', {
  src: 'local("Comic Sans MS")'
});

export const text = style({
  fontFamily: 'MyGlobalFont'
});
```

## keyframes

Creates a locally scoped set of keyframes.

```tsx
import { keyframes, style } from '@mattsjones/css-core';

const rotate = keyframes({
  '0%': { rotate: '0deg' },
  '100%': { rotate: '360deg' },
});

export const animated = style({
  animation: `3s infinite ${rotate}`;
});
```

## globalKeyframes

Creates a globally scoped set of keyframes.

```tsx
import { globalKeyframes, style } from '@mattsjones/css-core';

globalKeyframes('rotate', {
  '0%': { rotate: '0deg' },
  '100%': { rotate: '360deg' },
});

export const animated = style({
  animation: `3s infinite rotate`;
});
```
