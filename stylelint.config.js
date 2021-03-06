/* NOTES:
at-rule-no-unknown -
  This rule enforces only @ rules that appear in the CSS spec,
  however, @plugin appears in Less, so should be ignored.

declaration-colon-newline-after -
  Turned off because it messes with our format for multi-line declarations.

function-parentheses-space-inside -
  Custom setting that differs from stylelint-config-standard.

rule-empty-line-before -
  Custom setting that differs from stylelint-config-standard.

max-empty-lines -
  Set to 2 since we have existing two line breaks in place. Could be removed.

no-descending-specificity -
  Turned off, but probably shouldn't be.
  TODO: Turn on this rule and see if issues can be fixed.

selector-list-comma-newline-after -
  Turned off because it wraps arguments in Less mixin declarations.

selector-pseudo-element-colon-notation -
  Set to 'single' to support IE8.
  Remove this rule after dropping IE8 CSS support.
*/
module.exports = {
  'extends': 'stylelint-config-standard',
  'syntax': 'less',
  'rules': {
    'at-rule-no-unknown': [ true, { ignoreAtRules: 'plugin' } ],
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'function-name-case': [
      'lower',
      { ignoreFunctions: [ 'filter' ]}
    ],
    'function-parentheses-space-inside': 'always',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: 'first-nested',
        ignore: [ 'after-comment', 'inside-block' ]
      }
    ],
    'indentation': [
      4,
      {
        ignore: 'value'
      }
    ],
    'max-empty-lines': 2,
    'media-feature-parentheses-space-inside': 'always',
    'no-descending-specificity': null,
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': 'single'
  }
};
