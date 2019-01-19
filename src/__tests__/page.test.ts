import { Page } from '../page';


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

  describe('toJson()', () => {
    test('should build proper json', () => {
      const expected = {
        field: `page[${attribute}]`,
        value,
      };
      expect(page.toJson()).toEqual(expected);
    });
  });
});
