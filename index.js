/**
 * Created by danielbanting on 01/04/2016.
 */
const bestPracticesRules = require('./rules/best-practices');
const stylelisticRules = require('./rules/stylelistic');
const jsdocsRules = require('./rules/js-docs');
const miscRules = {
  'no-console': 'warn'
};

module.exports = {
  rules: Object.assign({}, stylelisticRules, jsdocsRules, miscRules, bestPracticesRules)
};
