import QueryParam from './queryParam';
import Include  from './include';
import FilterFactory from './filterFactory';
import PageFactory from './pageFactory';
import SortFactory from './sortFactory';

export default class queryParamsBuilder {
  params : Array<QueryParam>;

  constructor() {
    this.params = [];
  }

  add(...params: Array<QueryParam>) : this {
    this.params.push(...params);
    return this;
  }

  buildString() : string {
    const arr = this.params.map(param => param.toString());
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
