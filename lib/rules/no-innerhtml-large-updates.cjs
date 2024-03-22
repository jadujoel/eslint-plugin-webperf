const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "warning",
    docs: {
      description: "Advise against using `innerHTML` for large updates to improve performance.",
      category: "Performance Enhancements",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      AssignmentExpression(node) {
        if (node.left.property && node.left.property.name === 'innerHTML') {
          context.report({
            node,
            message: "Consider alternatives to `innerHTML` for large updates, such as `createElement` and `appendChild`.",
          });
        }
      },
    };
  },
};
