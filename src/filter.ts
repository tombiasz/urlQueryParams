import QueryParam from './queryParam';
import Operator from './operator';

export default class Filter implements QueryParam {
  private groupName: string = 'filter';
  private attribute: string;
  private operator: string;
  readonly value: string;

  constructor(attribute: string, operator: Operator, value: string) {
    this.attribute = attribute;
    this.operator = operator;
    this.value = value;
  }

  get field() : string {
    const { groupName, attribute, operator} = this;
    return `${groupName}[${attribute}][${operator}]`;
  }

  toString() : string {
    const { field, value } = this;
    return `${field}=${value}`;
  }
}
