# eslint-plugin-webperf

An ESLint plugin to help you improve your javascript web performance.
New project, in progress, feel free to contribute.

## Installation
```bash
npm install eslint-plugin-webperf
```

## Usage

// .eslintrc
```json
{
  "extends": [
    "plugin:webperf/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018
  }
}
```

```bash
npx eslint .
```
