const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Encourage batch DOM updates with DocumentFragment to reduce reflows and repaints.",
      category: "Performance Enhancements",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    let appendChildCallCount = 0;

    return {
      "CallExpression": function(node) {
        if (node.callee.property && node.callee.property.name === 'appendChild') {
          appendChildCallCount++;
          if (appendChildCallCount > 1) {
            context.report({
              node,
              message: "Consider batching multiple DOM updates with DocumentFragment to reduce reflows and repaints.",
            });
          }
        }
      },
      "BlockStatement:exit": function() {
        // Reset count after leaving a block to avoid false positives across unrelated blocks
        appendChildCallCount = 0;
      }
    };
  },
};
