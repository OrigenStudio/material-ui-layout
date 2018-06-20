module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  globals: {
    graphql: true,
  },
  rules: {
    'react/prefer-stateless-function': 'warning',
  },
};
