import Sort from '../sort';

describe('Sort', () => {
  const attribute = 'fizz';
  const direction = '-';
  let sort: Sort;

  beforeEach(() => {
    sort = new Sort(attribute, direction);
  });

  describe('toString()', () => {
    test('should build proper query string', () => {
      const expected = `sort=${direction}${attribute}`;
      expect(sort.toString()).toBe(expected);
    });
  });

  describe('field', () => {
    test('should properly set field attribute', () => {
      expect(sort.field).toBe(`sort`);
    });
  });

  describe('value', () => {
    test('should properly set value attribute', () => {
      expect(sort.value).toBe(`${direction}${attribute}`);
    });
  });
});
