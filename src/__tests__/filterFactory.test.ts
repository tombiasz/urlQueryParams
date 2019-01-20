import Filter from '../filter';
import FilterFactory from '../filterFactory';
import Operator from '../operator';

jest.mock('../filter', () => jest.fn().mockImplementation(() => ({})));

describe('FilterParamBuilder', () => {
  const attr = 'fizz';
  let filterFactory: FilterFactory;

  beforeEach(() => {
    filterFactory = new FilterFactory(attr);
  });

  describe('like()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.like(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.Like, value);
    });
  });

  describe('notLike()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.notLike(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.NotLike, value);
    });
  });

  describe('equal()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.equal(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.Equal, value);
    });
  });

  describe('eq()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.eq(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.Equal, value);
    });
  });

  describe('notEqual()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.notEqual(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.NotEqual, value);
    });
  });

  describe('notEq()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.notEq(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.NotEqual, value);
    });
  });

  describe('between()', () => {
    test('should call Filter with proper parameters', () => {
      const start = 'foo';
      const end = 'bar';
      filterFactory.between(start, end);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.Between, `${start},${end}`);
    });
  });

  describe('notBetween()', () => {
    test('should call Filter with proper parameters', () => {
      const start = 'foo';
      const end = 'bar';
      filterFactory.notBetween(start, end);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.NotBetween, `${start},${end}`);
    });
  });

  describe('greaterThan()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.greaterThan(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.GreaterThan, value);
    });
  });

  describe('gt()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.gt(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.GreaterThan, value);
    });
  });

  describe('greaterThanOrEqual()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.greaterThanOrEqual(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.GreaterThanOrEqual, value);
    });
  });

  describe('gte()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.gte(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.GreaterThanOrEqual, value);
    });
  });

  describe('lessThan()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.lessThan(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.LessThan, value);
    });
  });

  describe('lt()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.lt(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.LessThan, value);
    });
  });

  describe('lessThanOrEqual()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.lessThanOrEqual(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.LessThanOrEqual, value);
    });
  });

  describe('gte()', () => {
    test('should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.lte(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.LessThanOrEqual, value);
    });
  });

  describe('in()', () => {
    test('single arg: should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.in(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.In, value);
    });

    test('multiple args: should call Filter with proper parameters', () => {
      const values = ['foo', 'bar'];
      filterFactory.in(...values);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.In, values.join(','));
    });
  });

  describe('notIn()', () => {
    test('single arg: should call Filter with proper parameters', () => {
      const value = 'buzz';
      filterFactory.notIn(value);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.NotIn, value);
    });

    test('multiple args: should call Filter with proper parameters', () => {
      const values = ['foo', 'bar'];
      filterFactory.notIn(...values);
      expect(Filter).toHaveBeenCalledWith(attr, Operator.NotIn, values.join(','));
    });
  });
});
