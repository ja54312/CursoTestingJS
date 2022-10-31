// matchers
test('test object', () => {
  const data = { name: 'jose' };
  data.lastname = 'alatorre';
  expect(data).toEqual({ name: 'jose', lastname: 'alatorre' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christofer').toMatch(/stof/);
});

test('listas', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
