// eslint-plugin-webperf/lib/rules/use-offscreen-canvas.js
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Promote using `OffscreenCanvas` in workers for complex canvas operations.",
      category: "Performance Enhancements",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      NewExpression(node) {
        if (node.callee.name === 'CanvasRenderingContext2D') {
          context.report({
            node,
            message: "Consider using `OffscreenCanvas` for complex canvas operations to enhance performance.",
          });
        }
      },
      MemberExpression(node) {
        if (node.property.name === 'getContext' && node.parent.arguments && node.parent.arguments[0] && node.parent.arguments[0].value === '2d') {
          context.report({
            node,
            message: "Consider using `OffscreenCanvas.getContext('2d')` in a Web Worker for complex operations.",
          });
        }
      },
    };
  },
};
