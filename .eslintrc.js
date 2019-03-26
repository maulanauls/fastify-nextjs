module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['import', 'jest'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'global-require': 'off',
    'no-unused-vars': ['error', { vars: 'local', args: 'none' }],
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': 'error',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
