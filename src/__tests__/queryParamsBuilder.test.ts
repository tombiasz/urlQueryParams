import QueryParam from '../queryParam';
import QueryParamsBuilder from '../queryParamsBuilder';

class SampleParam implements QueryParam {
  attr : string;

  constructor(attr : string) {
    this.attr = attr;
  }

  toString() {
    return this.attr;
  }

  toJson() {
    return {
      field: '',
      value: '',
    };
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
        const param = new SampleParam('foo');
        q.add(param);
        expect(q.params).toEqual([param]);
      });

      test('should add many params to list of params', () => {
        const param1 = new SampleParam('foo');
        const param2 = new SampleParam('bar');
        q.add(param1, param2);
        expect(q.params).toEqual([param1, param2]);
      });
    });

    describe('buildString()', () => {
      test('should build proper query params for one Param', () => {
        q.add(new SampleParam('foo'));
        expect(q.buildString()).toBe('?foo');
      });

      test('should build proper query params for many Param', () => {
        q.add(new SampleParam('foo'));
        q.add(new SampleParam('bar'));
        expect(q.buildString()).toBe('?foo&bar');
      });
    });
  });
});
