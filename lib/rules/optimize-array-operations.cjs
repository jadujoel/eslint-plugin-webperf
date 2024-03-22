const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
// eslint-plugin-webperf/lib/rules/optimize-array-operations.js
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Encourage more efficient array operations to avoid creating unnecessary intermediate arrays.",
      category: "Performance Enhancements",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      CallExpression(node) {
        // Check if this CallExpression is part of a chain (e.g., arr.map().filter())
        if (node.callee.type === 'MemberExpression' &&
            node.callee.object.type === 'CallExpression' &&
            node.callee.object.callee.type === 'MemberExpression' &&
            ['map', 'filter', 'reduce'].includes(node.callee.property.name) &&
            ['map', 'filter', 'reduce'].includes(node.callee.object.callee.property.name)) {
          context.report({
            node,
            message: `Consider combining this '${node.callee.property.name}' operation with the preceding '${node.callee.object.callee.property.name}' to optimize array processing.`,
          });
        }
      },
    };
  },
};
