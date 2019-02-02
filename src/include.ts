import QueryParam from './queryParam';

export default class Include implements QueryParam {
  groupName: string = 'include';
  attribute: string;

  constructor(...attributes: Array<string>) {
    this.attribute = attributes.join(',');
  }

  toString() : string {
    const { groupName, attribute } = this;
    return `${groupName}=${attribute}`;
  }

  toJson() : { field: string, value: string } {
    const { groupName, attribute } = this;
    return {
      field: `${groupName}`,
      value: attribute,
    };
  }
}
