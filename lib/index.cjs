const { ESLint } = require('eslint');
const { resolve } = require('path');

const rr = (path) => require(resolve(__dirname, path));

/** @type {ESLint.ConfigData} */
module.exports = {
  rules: {
    "batch-dom-updates": rr('./rules/batch-dom-updates.cjs'),
    "debounce-throttle-events": rr('./rules/debounce-throttle-events.cjs'),
    "no-await-in-loop": rr('./rules/no-await-in-loop.cjs'),
    "no-innerhtml-large-updates": rr('./rules/no-innerhtml-large-updates.cjs'),
    "prefer-for-of": rr('./rules/prefer-for-of.cjs'),
    "prefer-lazy-loading": rr('./rules/prefer-lazy-loading.cjs'),
    "prefer-textcontent": rr('./rules/prefer-textcontent.cjs'),
    "prefer-observers": rr('./rules/prefer-observers.cjs'),
    "simplify-conditional-checks": rr('./rules/simplify-conditional-checks.cjs'),
    "use-offscreen-canvas": rr('./rules/use-offscreen-canvas.cjs'),
    "optimize-array-operations": rr('./rules/optimize-array-operations.cjs'),
    // "use-inert": rr('./use-inert.cjs'),
    // "use-lazy-loading": rr('./use-lazy-loading.cjs'),
    // "use-preload": rr('./use-preload.cjs'),
    // "use-resource-hints": rr('./use-resource-hints.cjs'),
    // "use-size-attribute": rr('./use-size-attribute.cjs'),
    // "use-webp": rr('./use-webp.cjs'),
    // "use-requestidlecallback": rr('./use-requestidlecallback.cjs'),
  },
  configs: {
    recommended: rr('./configs/recommended.cjs'),
  },
};
