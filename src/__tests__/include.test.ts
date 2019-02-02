import Include from '../include';

describe('Include', () => {
  const attr1 = 'fizz';
  const attr2 = 'buzz';
  let include : Include;

  describe('toString()', () => {
    test('should build proper query param for single attr', () => {
      include = new Include(attr1);
      expect(include.toString()).toBe(`include=${attr1}`);
    });

    test('should build proper query param for many attrs', () => {
      include = new Include(attr1, attr2);
      const attr = [attr1, attr2].join(',');
      expect(include.toString()).toBe(`include=${attr}`);
    });
  });

  describe('toJson()', () => {
    test('should build proper query param for single attr', () => {
      include = new Include(attr1);
      const expected = {
        field: `include`,
        value: attr1,
      };
      expect(include.toJson()).toEqual(expected);
    });

    test('should build proper query param for many attrs', () => {
      include = new Include(attr1, attr2);
      const expected = {
        field: `include`,
        value: [attr1, attr2].join(','),
      };
      expect(include.toJson()).toEqual(expected);
    });
  });
});
