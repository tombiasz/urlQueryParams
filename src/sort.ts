import QueryParam from './queryParam';

export default class Sort implements QueryParam {
  private groupName: string = 'sort';
  private attribute: string;
  private direction: string;

  constructor(attribute: string, direction: string) {
    this.attribute = attribute;
    this.direction = direction;
  }

  get field() : string {
    return this.groupName;
  }

  get value() : string {
    const { attribute, direction } = this;
    return `${direction}${attribute}`;
  }

  toString() : string {
    const { field, value } = this;
    return `${field}=${value}`;
  }
}
