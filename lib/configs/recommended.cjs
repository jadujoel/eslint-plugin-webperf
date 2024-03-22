module.exports = {
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 6,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  plugins: ["webperf"],
  rules: {
    "webperf/batch-dom-updates": "warn",
    "webperf/debounce-throttle-events": "warn",
    "webperf/no-innerhtml-large-updates": "warn",
    "webperf/no-await-in-loop": "warn",
    "webperf/prefer-for-of": "warn",
    "webperf/prefer-lazy-loading": "warn",
    "webperf/prefer-textcontent": "warn",
    "webperf/prefer-observers": "warn",
    "webperf/use-offscreen-canvas": "warn",
    "webperf/optimize-array-operations": "warn",
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs'],
      },
    },
  },
}
