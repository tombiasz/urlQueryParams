import QueryParam from '../queryParam';
import QueryParamsBuilder from '../queryParamsBuilder';

class SampleParam implements QueryParam {
  readonly field : string;
  readonly value : string;

  constructor(field : string, value : string) {
    this.field = field;
    this.value = value;
  }

  toString() {
    const { field, value } = this;
    return `${field}=${value}`;
  }
}

describe('QueryParamsBuilder', () => {
  const Q = QueryParamsBuilder;
  let q : QueryParamsBuilder;

  beforeEach(() => {
    q = new Q();
  });

  describe('instance', () => {
    describe('add()', () => {
      test('should add param to list of params', () => {
        const param = new SampleParam('foo', 'bar');
        q.add(param);
        expect(q.params).toEqual([param]);
      });

      test('should add many params to list of params', () => {
        const param1 = new SampleParam('foo', 'bar');
        const param2 = new SampleParam('fizz', 'buzz');
        q.add(param1, param2);
        expect(q.params).toEqual([param1, param2]);
      });
    });

    describe('buildString()', () => {
      test('should build proper query params for one Param', () => {
        q.add(new SampleParam('foo', 'bar'));
        expect(q.buildString()).toBe('?foo=bar');
      });

      test('should build proper query params for many Param', () => {
        q.add(new SampleParam('foo', 'bar'));
        q.add(new SampleParam('fizz', 'buzz'));
        expect(q.buildString()).toBe('?foo=bar&fizz=buzz');
      });
    });

    describe('buildJson()', () => {
      test('should build proper query params for one Param', () => {
        q.add(new SampleParam('foo', 'bar'));
        expect(q.buildJson()).toEqual({ foo: 'bar' });
      });

      test('should build proper query params for many Param', () => {
        q.add(new SampleParam('foo', 'bar'));
        q.add(new SampleParam('fizz', 'buzz'));
        expect(q.buildJson()).toEqual({ foo: 'bar', fizz: 'buzz' });
      });
    });
  });

  describe('example', () => {
    test('should build proper string', () => {
      const qs = q
        .add(
          Q.filter('type').notLike('fizz'),
          Q.filter('amount').between('100', '50000')
        )
        .add(
          Q.page().limit(20),
          Q.page().offset(10),
        )
        .add(
          Q.sort('created').desc(),
        )
        .add(
          Q.include('category'),
        )
        .buildString();

      const expected = [
        '?filter[type][!like]=fizz',
        '&filter[amount][between]=100,50000',
        '&page[limit]=20',
        '&page[offset]=10',
        '&sort=-created',
        '&include=category',
      ].join('')

      expect(qs).toBe(expected);
    })
  })
});
