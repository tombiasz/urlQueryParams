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

  describe('field', () => {
    test('should properly set field attribute', () => {
    include = new Include(attr1);
      expect(include.field).toBe('include');
    });
  });

  describe('value', () => {
    test('should properly set value attribute for single attr', () => {
    include = new Include(attr1);
      expect(include.value).toBe(attr1);
    });

    test('should properly set value attribute for many attrs', () => {
      include = new Include(attr1, attr2);
      const attr = [attr1, attr2].join(',');
      expect(include.value).toBe(attr);
    });
  });
});
