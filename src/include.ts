import AbstractQueryParam from './abstractQueryParam';

export default class Include extends AbstractQueryParam {
  private groupName: string = 'include';
  private attributes: Array<string>;

  constructor(...attributes: Array<string>) {
    super();
    this.attributes = attributes;
  }

  get field() : string {
    return this.groupName;
  }

  get value() : string {
    return this.attributes.join(',');
  }
}
