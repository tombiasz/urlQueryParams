import Page from './page';

export class PageFactory {
  // eslint-disable-next-line class-methods-use-this
  limit(value: number = 10) : Page {
    return new Page('limit', String(value));
  }

  // eslint-disable-next-line class-methods-use-this
  offset(value: number = 0) : Page {
    return new Page('offset', String(value));
  }
}
