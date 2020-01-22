const webpack = require('webpack');

const { indexPath } = require('./helpers');

module.exports = (env) => ({
  entry: './src/index.tsx',
  output: {
    path: indexPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(env.API_URL),
    }),
  ],
});
