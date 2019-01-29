module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  globals: {
    graphql: true,
  },
  rules: {
    'react/prefer-stateless-function': 1,
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
  },
};
