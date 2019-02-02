import AbstractQueryParam from './abstractQueryParam';
import Operator from './operator';

export default class Filter extends AbstractQueryParam {
  private groupName: string = 'filter';
  private attribute: string;
  private operator: string;
  readonly value: string;

  constructor(attribute: string, operator: Operator, value: string) {
    super();
    this.attribute = attribute;
    this.operator = operator;
    this.value = value;
  }

  get field() : string {
    const { groupName, attribute, operator} = this;
    return `${groupName}[${attribute}][${operator}]`;
  }
}
