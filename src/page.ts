import QueryParam from './queryParam';

export default class Page implements QueryParam {
  groupName: string = 'page';
  attribute: string;
  value: string;

  constructor(attribute: string, value: string) {
    this.attribute = attribute;
    this.value = value;
  }

  toString() : string {
    const { groupName, attribute, value } = this;
    return `${groupName}[${attribute}]=${value}`;
  }

  toJson() : { field: string, value: string } {
    const { groupName, attribute, value } = this;
    return {
      field: `${groupName}[${attribute}]`,
      value,
    };
  }
}
