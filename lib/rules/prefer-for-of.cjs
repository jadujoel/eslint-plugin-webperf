const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "suggest using `for...of` over `.forEach` for better performance",
      category: "Performance Enhancements",
      recommended: false,
    },
    fixable: null, // or "code" if the rule is automatically fixable
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.type === "MemberExpression" && node.callee.property.name === "forEach") {
          const sourceCode = context.sourceCode;
          const calleeCode = sourceCode.getText(node.callee);
          if (/^\w+\.forEach$/.test(calleeCode)) {
            context.report({
              node,
              message: "Prefer `for...of` over `.forEach` for better performance.",
            });
          } else {
          }
        }
      },
    };
  },
};
