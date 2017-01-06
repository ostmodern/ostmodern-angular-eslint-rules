const rules = {
  'array-bracket-spacing': ['warn', 'never'],
  'block-spacing': ['warn', 'always'],
  'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
  'camelcase': ['warn', { 'properties': 'never' }],
  'comma-spacing': ['warn', { 'before': false, 'after': true }],
  'comma-style': ['warn', 'last'],
  'comma-dangle': ['warn', 'never'],
  'computed-property-spacing': ['warn', 'never'],
  'consistent-this': ['warn', 'self'],
  'eol-last': 'warn',
  'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
  'keyword-spacing': 'warn',
  'linebreak-style': ['warn', 'unix'],
  'lines-around-comment': ['warn', { 'beforeBlockComment': false, 'afterBlockComment': false }],
  'max-depth': ['warn', 2],
  'max-len': ['warn', { 'code': 140, 'tabWidth': 4, 'ignoreUrls': true }],
  'max-params': 0,
  'new-parens': 'warn',
  'newline-before-return': 'warn',
  'no-array-constructor': 'warn',
  'no-inline-comments': 'warn',
  'no-continue': 'warn',
  'no-bitwise': 'warn',
  'no-lonely-if': 'warn',
  'no-mixed-spaces-and-tabs': 'warn',
  'no-multiple-empty-lines': ['warn', { 'max': 1 }],
  'no-nested-ternary': 'warn',
  'no-new-object': 'warn',
  'no-spaced-func': 'warn',
  'no-trailing-spaces': 'warn',
  'no-unneeded-ternary': 'warn',
  'no-whitespace-before-property': 'warn',
  'object-curly-spacing': ['warn', 'always'],
  'one-var': ['warn', 'never'],
  'one-var-declaration-per-line': ['warn', 'always'],
  'padded-blocks': ['warn', 'never'],
  'quotes': ['warn', 'single'],
  'valid-js': 'off',
  'require-jsdoc': 'off',
  'semi': ['error', 'always'],
  'spaced-comment': ['warn', 'always'],
  'arrow-parens': ['warn', 'as-needed'],
  'arrow-body-style': ['warn', 'as-needed'],
  'arrow-spacing':['warn', { 'before': true, 'after': true }],
  'no-confusing-arrow': 'warn',
  'no-const-assign': 'warn',
  'prefer-const': 'warn',
  'prefer-arrow-callback': 'warn',
  'prefer-template': 'warn',
  'template-curly-spacing': ['warn', 'never'],
  'no-var': 'warn',
  'no-useless-constructor': 'warn'
};

module.exports = rules;
