const createCommonConfig = require('./common');

module.exports = (env) => ({
  ...createCommonConfig(env),
});
