require('dotenv').config();

const createDevConfig = require('./webpack/dev');
const createProdConfig = require('./webpack/prod');

module.exports = (envFromCommand) => {
  console.log({ envFromCommand });
  const env = {
    ...process.env,
    ...envFromCommand,
  };

  if (env.ENVIRONMENT === 'production') {
    return createProdConfig(env);
  }
  return createDevConfig(env);
};
