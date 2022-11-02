const Person = require('./06-person');

describe('Test para la clase Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Jose', 45, 1.7);
  });
  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 70;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
