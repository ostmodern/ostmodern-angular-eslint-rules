'use strict';

const rules = {
  'valid-jsdoc': [
    'warn', {
      prefer: {
        return: 'returns'
      },
      requireParamDescription: false,
      requireReturnDescription: false
    }
  ]
};

module.exports = rules;
