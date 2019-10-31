const rules = {
  'array-bracket-spacing': ['error', 'always'],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
  'camelcase': ['error', { 'properties': 'never', 'ignoreDestructuring': true }],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { 'before': false, 'after': true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'consistent-this': 'off',
  'eol-last': 'error',
  'func-call-spacing': ['error', 'never'],
  'func-name-matching': ['error', 'always'],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'consistent'],
  'implicit-arrow-linebreak': ['error', 'beside'],
  'indent': ['error', 2, {
    'SwitchCase': 1,
    'MemberExpression': 1,
    'VariableDeclarator': 1,
    'outerIIFEBody': 1,
    'ArrayExpression': 1,
    'ObjectExpression': 1
  }],
  'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
  'keyword-spacing': ['error', { 'before': true, 'after': false }],
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': ['warn', { 'beforeBlockComment': false, 'afterBlockComment': false }],
  'lines-between-class-members': ['error', 'always'],
  'max-depth': 'off',
  'max-len': ['error', { 'code': 140, 'tabWidth': 4, 'ignoreUrls': true }],
  'max-params': 0,
  'multiline-comment-style': ['error', 'starred-block'],
  'multiline-ternary': 'off',
  'new-parens': ['error', 'never'],
  'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 1 }],
  'no-array-constructor': 'off',
  'no-else-return': ['error', { 'allowElseIf': false }],
  'no-confusing-arrow': 'off',
  'no-inline-comments': 'off',
  'no-continue': 'error',
  'no-bitwise': 'error',
  'no-lonely-if': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multiple-empty-lines': ['error', { 'max': 1 }],
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-trailing-spaces': 'error',
  'no-unneeded-ternary': 'error',
  'no-whitespace-before-property': 'error',
  'object-curly-spacing': ['error', 'always'],
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': ['error', 'always'],
  'padded-blocks': ['error', {
    "blocks": "never",
    "switches": "never",
    "classes": "always"
  }],
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
  'spaced-comment': ['error', 'always'],
  'arrow-body-style': 'off',
  'arrow-parens': ['error', 'always'],
  'arrow-spacing': ['error', { 'before': true, 'after': true }],
  'class-methods-use-this': 'off',
  'no-const-assign': 'error',
  'prefer-arrow-callback': 'off',
  'prefer-const': 'error',
  'prefer-template': 'error',
  'template-curly-spacing': ['error', 'never'],
  'no-useless-constructor': 'error',
  'no-var': 'error'
};

module.exports = rules;
