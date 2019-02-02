import Filter from '../filter';
import Operator from '../operator';

describe('Filter', () => {
  const attribute = 'fizz';
  const operator = Operator.Equal;
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

  describe('field', () => {
    test('should properly set field attribute', () => {
      expect(filter.field).toBe(`filter[${attribute}][${operator}]`);
    });
  });

  describe('value', () => {
    test('should properly set value attribute', () => {
      expect(filter.value).toBe(value);
    });
  });
});
