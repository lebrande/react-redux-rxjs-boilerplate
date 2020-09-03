const path = require('path');
const webpack = require('webpack');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const indexPath = path.resolve(__dirname, '../public');

const alias = {
  '@': path.resolve(__dirname, '../src'),
  '@sb': path.resolve(__dirname, '../.storybook'),
};

const typescriptRule = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'awesome-typescript-loader',
      options: {
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer],
        }),
      },
    },
  ],
};

const createDefinePlugin = env =>
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(env.NODE_ENV),
    API_URL: JSON.stringify(env.API_URL),
  });

module.exports = {
  indexPath,
  alias,
  typescriptRule,
  createDefinePlugin,
};
