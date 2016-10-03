'use strict';

const rules = {
  'valid-jsdoc': [
    'warn', {
      requireReturn: false,
      prefer: {
        return: 'returns'
      },
      requireParamDescription: false,
      requireReturnDescription: false
    }
  ]
};

module.exports = rules;
