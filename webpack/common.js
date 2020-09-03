const {
  indexPath,
  alias,
  typescriptRule,
  createDefinePlugin,
} = require('./utils');

module.exports = (env) => ({
  entry: './src/index.tsx',
  output: {
    path: indexPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias,
  },
  module: {
    rules: [
      typescriptRule,
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    ],
  },
  plugins: [
    createDefinePlugin(env),
  ],
});
