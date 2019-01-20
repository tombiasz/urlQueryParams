import Page from '../page';
import PageFactory from '../pageFactory';

jest.mock('../page', () => jest.fn().mockImplementation(() => ({})));

describe('PageFactory', () => {
  let pageFactory : PageFactory;

  beforeEach(() => {
    pageFactory = new PageFactory();
  });

  describe('limit()', () => {
    test('should call Page with proper parameters', () => {
      pageFactory.limit(13);
      expect(Page).toHaveBeenCalledWith('limit', '13');
    });

    test('should call Page with default parameters', () => {
      pageFactory.limit();
      expect(Page).toHaveBeenCalledWith('limit', '10');
    });
  });

  describe('offset()', () => {
    test('should call Page with proper parameters', () => {
      pageFactory.offset(17);
      expect(Page).toHaveBeenCalledWith('offset', '17');
    });

    test('should call Page with default parameters', () => {
      pageFactory.offset();
      expect(Page).toHaveBeenCalledWith('offset', '0');
    });
  });
});
