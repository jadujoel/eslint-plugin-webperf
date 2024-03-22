const rule = requirie('./prefer-for-of');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run('preferForOf', rule, {
  valid: [
    'for (const item of items) { console.log(item); }',
  ],

  invalid: [
    {
      code: 'items.forEach(item => console.log(item));',
      errors: [{ message: 'Prefer `for...of` over `.forEach` for better performance.' }],
    },
  ],
});

console.log('All tests passed!')
