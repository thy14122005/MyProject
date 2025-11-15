// tests/app.test.js
describe('Basic Tests', () => {
  test('addition works correctly', () => {
    expect(1 + 1).toBe(2);
  });

  test('string concatenation', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });
});
// Test cơ bản để kiểm tra Jest hoạt động
describe('Basic Math Tests', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(5 - 2).toBe(3);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(2 * 3).toBe(6);
  });
});

// Test cho object
describe('Object Tests', () => {
  test('object assignment works', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
});

// Test cho array
describe('Array Tests', () => {
  test('array contains value', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).toContain('banana');
    expect(fruits).toHaveLength(3);
  });
});
