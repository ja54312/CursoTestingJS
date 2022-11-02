describe('group 1', () => {
  beforeAll(() => {
    // console.log('beforeAll');
    // up db
  });
  afterAll(() => {
    // console.log('afterAll');
    // down  db
  });
  beforeEach(() => {
    // console.log('each');
  });
  afterEach(() => {
    // console.log('after each');
  });
  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });
});

describe('group 2', () => {
  test('case 3', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 4', () => {
    expect(1 + 3).toBe(4);
  });
});
