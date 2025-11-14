// tests/app.test.js
describe('Basic Tests', () => {
  test('addition works correctly', () => {
    expect(1 + 1).toBe(2);
  });

  test('string concatenation', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });
});
