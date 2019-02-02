import Page from '../page';

describe('Page', () => {
  const attribute = 'fizz';
  const value = 'buzz';
  let page: Page;

  beforeEach(() => {
    page = new Page(attribute, value);
  });

  describe('toString()', () => {
    test('should build proper query string', () => {
      const expected = `page[${attribute}]=${value}`;
      expect(page.toString()).toBe(expected);
    });
  });

  describe('field', () => {
    test('should properly set field attribute', () => {
      expect(page.field).toBe(`page[${attribute}]`);
    });
  });

  describe('value', () => {
    test('should properly set value attribute', () => {
      expect(page.value).toBe(value);
    });
  });
});
