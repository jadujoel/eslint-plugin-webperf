const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer using `textContent` over `innerText` due to better performance and consistency.",
      category: "Best Practices",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.property.name === 'innerText') {
          context.report({
            node,
            message: "Prefer using `textContent` over `innerText` for better performance and consistency.",
          });
        }
      },
    };
  },
};
