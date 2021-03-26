---
title: Setup
---

# Setup

Install the core package.

```bash
$ npm install --save-dev @mattsjones/css-core
```

## Babel Setup

Add the [Babel](https://babeljs.io) plugin.

```bash
$ npm install --save-dev @mattsjones/css-babel-plugin
```

Then, add it to your Babel config. For example in `.babelrc`:

```json
{
  "plugins": ["@mattsjones/css-babel-plugin"]
}
```

## Webpack Setup

Add the [webpack](https://webpack.js.org) plugin.

```bash
$ npm install --save-dev @mattsjones/css-webpack-plugin
```

Then, add it to the `plugins` array in your webpack config. For example:

```js
const { TreatPlugin } = require('@mattsjones/css-webpack-plugin');

module.exports = {
  plugins: [new TreatPlugin()],
};
```


> You'll also need to ensure you're handling CSS files in your webpack config.

For example:

```js
const { TreatPlugin } = require('@mattsjones/css-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new TreatPlugin(),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
};
```
