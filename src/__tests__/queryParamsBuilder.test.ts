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

  describe('instance', () => {
    let q : QueryParamsBuilder;

    beforeEach(() => {
      q = new Q();
    });

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
  });
});
