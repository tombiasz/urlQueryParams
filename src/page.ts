import AbstractQueryParam from './abstractQueryParam';

export default class Page extends AbstractQueryParam {
  private groupName: string = 'page';
  private attribute: string;
  readonly value: string;

  constructor(attribute: string, value: string) {
    super();
    this.attribute = attribute;
    this.value = value;
  }

  get field() {
    const { groupName, attribute } = this;
    return `${groupName}[${attribute}]`;
  }
}
