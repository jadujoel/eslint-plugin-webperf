const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Encourage the use of lazy loading for images and components to improve initial load times.",
      category: "Performance Enhancements",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === 'img' && !node.attributes.some(attr => attr.name.name === 'loading' && attr.value.value === 'lazy')) {
          context.report({
            node,
            message: "Consider using lazy loading (`loading=\"lazy\"`) for images to improve performance.",
          });
        }
      },
    };
  },
};
