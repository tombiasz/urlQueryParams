import QueryParam from './queryParam';
import Include  from './include';
import FilterFactory from './filterFactory';
import PageFactory from './pageFactory';
import SortFactory from './sortFactory';

export default class QueryParamsBuilder {
  private _params : Array<QueryParam>;

  constructor() {
    this._params = [];
  }

  get params() {
    return this._params;
  }

  add(...params: Array<QueryParam>) : this {
    this._params.push(...params);
    return this;
  }

  buildString() : string {
    const arr = this._params.map(param => param.toString());
    return `?${arr.join('&')}`;
  }

  static page() : PageFactory {
    return new PageFactory();
  }

  static filter(attr : string) : FilterFactory {
    return new FilterFactory(attr);
  }

  static include(...attrs : Array<string>) : Include {
    return new Include(...attrs);
  }

  static sort(attr : string) : SortFactory {
    return new SortFactory(attr);
  }
}
