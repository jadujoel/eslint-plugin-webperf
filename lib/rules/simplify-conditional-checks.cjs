const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Suggest using simplified conditional checks for brevity and potential performance benefits.",
      category: "Best Practices",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      IfStatement(node) {
        const test = node.test;
        if (
          test.type === 'BinaryExpression' &&
          (test.operator === '===' || test.operator === '!==') &&
          (test.right.type === 'Literal' && test.right.raw === 'undefined' ||
           test.right.type === 'Identifier' && test.right.name === 'undefined' ||
           test.right.value === null)
        ) {
          context.report({
            node,
            message: "Consider using a simplified conditional check (e.g., `if (thing)`).",
          });
        }
      },
    };
  },
};
