module.exports = {
  '*.{ts,tsx}': ['eslint --max-warnings 0 --fix'],
  '**/*.ts?(x)': () => 'tsc',
  '*.{json,md}': ['prettier --write'],
}
