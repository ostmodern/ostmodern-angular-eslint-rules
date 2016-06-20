/**
 * Created by danielbanting on 01/04/2016.
 */

const stylelisticRules = require('./rules/stylelistic');
const jsdocsRules = require('./rules/jsDocs');
const miscRules = {
  'no-console': 'warn'
};

module.exports = {
  rules: Object.assign({}, stylelisticRules, jsdocsRules, miscRules)
};
