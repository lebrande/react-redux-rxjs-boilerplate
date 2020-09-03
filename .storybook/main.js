const {
  typescriptRule,
  alias,
  createDefinePlugin,
} = require('../webpack/utils');

module.exports = {
  stories: ['@/components/**/*.stories.tsx'],
  addons: [
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      ...typescriptRule,
      use: [
        ...typescriptRule.use,
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        }
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(
      createDefinePlugin({
        ...process.env,
        TARGET: 'test',
      }),
    );
    Object.entries(alias).forEach(([key, value]) => {
      config.resolve.alias[key] = value;
    });
    return config;
  },
};