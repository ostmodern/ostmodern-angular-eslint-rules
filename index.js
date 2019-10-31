/**
 * Created by danielbanting on 01/04/2016.
 */
const bestPracticesRules = require('./rules/best-practices');
const stylelisticRules = require('./rules/stylelistic');

module.exports = {
  rules: Object.assign({}, stylelisticRules, bestPracticesRules)
};
