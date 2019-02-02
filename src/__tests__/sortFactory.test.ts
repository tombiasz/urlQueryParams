import Sort from '../sort';
import SortFactory from '../sortFactory';

jest.mock('../sort', () => jest.fn().mockImplementation(() => ({})));

describe('SortFactory', () => {
  const attr = 'fizz';
  let sortFactory : SortFactory;

  beforeEach(() => {
    sortFactory = new SortFactory(attr);
  });

  describe('asc()', () => {
    test('should call Sort with proper parameters', () => {
      sortFactory.asc();
      expect(Sort).toHaveBeenCalledWith(attr, '');
    });
  });

  describe('desc()', () => {
    test('should call Sort with proper parameters', () => {
      sortFactory.desc();
      expect(Sort).toHaveBeenCalledWith(attr, '-');
    });
  });
});
