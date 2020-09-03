module.exports = {
  extends: [
    "./node_modules/react-redux-typescript-scripts/eslint.js",
    "./node_modules/react-redux-typescript-scripts/eslint-prettier.js"
  ],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off"
  },
};