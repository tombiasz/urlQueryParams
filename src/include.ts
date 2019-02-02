import QueryParam from './queryParam';

export default class Include implements QueryParam {
  private groupName: string = 'include';
  private attributes: Array<string>;

  constructor(...attributes: Array<string>) {
    this.attributes = attributes;
  }

  get field() : string {
    return this.groupName;
  }

  get value() : string {
    return this.attributes.join(',');
  }

  toString() : string {
    const { field, value } = this;
    return `${field}=${value}`;
  }
}
