import Filter from '../filter';

describe('Filter', () => {
  const attribute = 'fizz';
  const operator = 'is';
  const value = 'buzz';
  let filter: Filter;

  beforeEach(() => {
    filter = new Filter(attribute, operator, value);
  });

  describe('toString()', () => {
    test('should build proper query string', () => {
      const expected = `filter[${attribute}][${operator}]=${value}`;
      expect(filter.toString()).toBe(expected);
    });
  });

  describe('toJson()', () => {
    test('should build proper json', () => {
      const expected = {
        field: `filter[${attribute}][${operator}]`,
        value,
      };
      expect(filter.toJson()).toEqual(expected);
    });
  });
});