import AbstractQueryParam from './abstractQueryParam';

export default class Sort extends AbstractQueryParam {
  private groupName: string = 'sort';
  private attribute: string;
  private direction: string;

  constructor(attribute: string, direction: string) {
    super();
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
}
