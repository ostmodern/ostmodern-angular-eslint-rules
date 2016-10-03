'use strict';

const rules = {
  'valid-jsdoc': [
    'warn', {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false
    }
  ]
};

module.exports = rules;
