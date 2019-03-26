module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['import', 'jest'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'global-require': 'off',
    'object-curly-spacing': ['error', 'always'],
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
