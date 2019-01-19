export default class Filter {
  groupName: string = 'filter';
  attribute: string;
  operator: string;
  value: string;

  constructor(attribute: string, operator: string, value: string) {
    this.attribute = attribute;
    this.operator = operator;
    this.value = value;
  }

  toString() : string {
    const { groupName, attribute, operator, value } = this;
    return `${groupName}[${attribute}][${operator}]=${value}`;
  }

  toJson() : { field: string, value: string } {
    const { groupName, attribute, operator, value } = this;
    return {
      field: `${groupName}[${attribute}][${operator}]`,
      value,
    }
  }
}
