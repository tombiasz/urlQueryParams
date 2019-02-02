import QueryParam from './queryParam';

export default class Page implements QueryParam {
  private groupName: string = 'page';
  private attribute: string;
  readonly value: string;

  constructor(attribute: string, value: string) {
    this.attribute = attribute;
    this.value = value;
  }

  get field() {
    const { groupName, attribute } = this;
    return `${groupName}[${attribute}]`;
  }

  toString() : string {
    const { field, value } = this;
    return `${field}=${value}`;
  }
}
