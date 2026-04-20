const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ibrahima', () => {
    expect(values.firstName).toEqual('Ibrahima');
  });
  test('lastName is Yock', () => {
    expect(values.lastName).toEqual('Yock');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 1997', () => {
    expect(values.birthYear).toEqual(1997);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Ibrahima Yock');
  });
});

describe('step 3', () => {
  test('fullName is Ibrahima Yock', () => {
    expect(values.fullName).toEqual('Ibrahima Yock');
  });
  test('age is 29', () => {
    expect(values.age).toEqual(29);
  });
});
