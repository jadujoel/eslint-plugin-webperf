module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: "Encourage using Promise.all for handling multiple promises in parallel, rather than awaiting each one inside a loop.",
      recommended: false,
    },
    messages: {
      noAwaitInLoop: "Avoid using 'await' inside loops. Consider aggregating your promises and using 'Promise.all' after the loop.",
    },
    schema: [], // No options for this rule
  },

  create(context) {
    return {
      'WhileStatement AwaitExpression': node => {
        context.report({
          node,
          messageId: 'noAwaitInLoop',
        });
      },
      'DoWhileStatement AwaitExpression': node => {
        context.report({
          node,
          messageId: 'noAwaitInLoop',
        });
      },
      'ForStatement AwaitExpression': node => {
        context.report({
          node,
          messageId: 'noAwaitInLoop',
        });
      },
      'ForOfStatement AwaitExpression': node => {
        if (node.await) {
          context.report({
            node,
            messageId: 'noAwaitInLoop',
          });
        }
      },
    };
  },
};
