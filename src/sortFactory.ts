import Sort from './sort';

const SORT_DIRECTION_ASC = '';
const SORT_DIRECTION_DESC = '-';

export default class SortFactory {
  attribute: string;

  constructor(attribute: string) {
    this.attribute = attribute;
  }

  asc() {
    const { attribute } = this;
    return new Sort(attribute, SORT_DIRECTION_ASC);
  }

  desc() {
    const { attribute } = this;
    return new Sort(attribute, SORT_DIRECTION_DESC);
  }
}
