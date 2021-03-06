const createCommonConfig = require('./common');

const { indexPath } = require('./utils');

module.exports = (env) => ({
  ...createCommonConfig(env),
  devServer: {
    contentBase: indexPath,
    compress: true,
    port: env.PORT,
    historyApiFallback: true,
  },
});
