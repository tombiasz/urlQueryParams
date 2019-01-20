import Filter from './filter';
import Operator from './operator'

export default class FilterFactory {
  attribute: string;

  constructor(attribute: string) {
    this.attribute = attribute;
  }

  like(value: string) {
    return new Filter(this.attribute, Operator.Like, value);
  }

  notLike(value: string) {
    return new Filter(this.attribute, Operator.NotLike, value);
  }

  equal(value: string) {
    return new Filter(this.attribute, Operator.Equal, value);
  }

  eq(value: string) {
    return new Filter(this.attribute, Operator.Equal, value);
  }

  notEqual(value: string) {
    return new Filter(this.attribute, Operator.NotEqual, value);
  }

  notEq(value: string) {
    return new Filter(this.attribute, Operator.NotEqual, value);
  }

  between(startValue: string, endValue: string) {
    const value = `${startValue},${endValue}`;
    return new Filter(this.attribute, Operator.Between, value);
  }

  notBetween(startValue: string, endValue: string) {
    const value = `${startValue},${endValue}`;
    return new Filter(this.attribute, Operator.NotBetween, value);
  }

  greaterThan(value: string) {
    return new Filter(this.attribute, Operator.GreaterThan, value);
  }

  gt(value: string) {
    return new Filter(this.attribute, Operator.GreaterThan, value);
  }

  greaterThanOrEqual(value: string) {
    return new Filter(this.attribute, Operator.GreaterThanOrEqual, value);
  }

  gte(value: string) {
    return new Filter(this.attribute, Operator.GreaterThanOrEqual, value);
  }

  lessThan(value: string) {
    return new Filter(this.attribute, Operator.LessThan, value);
  }

  lt(value: string) {
    return new Filter(this.attribute, Operator.LessThan, value);
  }

  lessThanOrEqual(value: string) {
    return new Filter(this.attribute, Operator.LessThanOrEqual, value);
  }

  lte(value: string) {
    return new Filter(this.attribute, Operator.LessThanOrEqual, value);
  }

  in(...values: Array<string>) {
    const value = values.join(',');
    return new Filter(this.attribute, Operator.In, value);
  }

  notIn(...values: Array<string>) {
    const value = values.join(',');
    return new Filter(this.attribute, Operator.NotIn, value);
  }
}
