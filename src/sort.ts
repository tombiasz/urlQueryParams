export default class Sort {
  groupName: string = 'sort';
  attribute: string;
  direction: string;

  constructor(attribute: string, direction: string) {
    this.attribute = attribute;
    this.direction = direction;
  }

  toString() : string {
    const { groupName, attribute, direction } = this;
    return `sort=${direction}${attribute}`;
  }

  toJson() : { field: string, value: string } {
    const { groupName, attribute, direction } = this;
    return {
      field: groupName,
      value: `${direction}${attribute}`,
    };
  }
}
