const { Rule } = require('eslint')
/** @type {Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Encourage debouncing or throttling event handlers for better performance.",
      category: "Performance Enhancements",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.property && node.callee.property.name === 'addEventListener') {
          const eventType = node.arguments[0] ? node.arguments[0].value : '';
          const handlerArg = node.arguments[1];
          // Check if the event is 'scroll' or 'resize', which are commonly debounced or throttled
          if (['scroll', 'resize'].includes(eventType)) {
            let isDebouncedOrThrottled = false;

            // Check for direct call to debounce() or throttle()
            if (handlerArg.type === 'CallExpression' &&
                ['debounce', 'throttle'].includes(handlerArg.callee.name)) {
              isDebouncedOrThrottled = true;
            }

            // Check for a reference to a debounced/throttled function
            if (handlerArg.type === 'Identifier') {
              // This is a simplistic check; a more thorough implementation would
              // involve tracing the variable to its assignment and checking if
              // it's assigned a call to debounce() or throttle().
              const varName = handlerArg.name.toLowerCase();
              if (varName.includes('debounce') || varName.includes('throttle')) {
                isDebouncedOrThrottled = true;
              }
            }

            if (!isDebouncedOrThrottled) {
              context.report({
                node,
                message: `Consider debouncing or throttling the "${eventType}" event handler for better performance.`,
              });
            }
          }
        }
      },
    };
  },
};
