---
title: Advanced API
---

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

## inlineTheme

Generates a custom theme at runtime as an inline style object.

```ts
import { inlineTheme } from '@mattsjones/css-core';
import { themeVars, exampleStyle } from './styles.css.ts';

const customTheme = inlineTheme(themeVars, {
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