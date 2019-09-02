module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
  ],
  plugins: ['prettier', 'react', 'flowtype', 'react-hooks'],
  env: {
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: true,
      },
    ],
    'no-unused-vars': [
      1,
      {
        args: 'all',
        argsIgnorePattern: '^unused($|[A-Z].*$)',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: 'React|^unused($|[A-Z].*$)',
        caughtErrorsIgnorePattern: '^unused($|[A-Z].*$)',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
