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

  describe('toJson()', () => {
    test('should build proper json', () => {
      const expected = {
        field: 'sort',
        value: `${direction}${attribute}`,
      };
      expect(sort.toJson()).toEqual(expected);
    });
  });
});
