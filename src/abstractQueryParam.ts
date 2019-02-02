import QueryParam from './queryParam';

export default abstract class AbstractQueryParam implements QueryParam {
  readonly field!: string;
  readonly value!: string;

  toString() : string {
    const { field, value } = this;
    return `${field}=${value}`;
  }
}
