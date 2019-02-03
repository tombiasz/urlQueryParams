# Url Query Params Builder

inspired by [json api specification](https://jsonapi.org/format/)

## Example usage

```
const Q = require('./queryPramsBuilder');

new Q()
  .add(
    Q.filter('type').notLike('fizz'),
    Q.filter('amount').between('100', '50000')
  )
  .add(
    Q.page().limit(limit),
    Q.page().offset(offset)
  )
  .add(
    Q.sort('created').desc()
  )
  .add(
    Q.include('category'),
  )
  .buildString();
```

```
?filter[type][!like]=fizz&filter[amount][between]=100,50000&page[limit]=20&page[offset]=10&sort=-created&include=category
```

## Parameters types

### 1. sort
ascending
```
GET /resource?sort=attribute
```

descending
```
GET /resource?sort=-attribute
```

### 2. page
limit and offset paging strategy
```
GET /resource?page[limit]=10&page[offset]=1
```

### 3. filter
```
GET /resource?filter[attribute][operation]=value
```

Defined operations:
* Like `filter[attribute][like]=value`
* Not Like `filter[attribute][!like]=value`
* Equal `filter[attribute][is]=value`
* Not Equal `filter[attribute][!is]=value`
* Between `[attribute][between]=valueStart,valueEnd`
* Not Between `filter[attribute][!between]=valueStart,valueEnd`
* Greater Than `filter[attribute][gt]=value`
* Greater Than or Equal `filter[attribute][gte]=value`
* Less Than `filter[attribute][lt]=value`
* Lesser Than or Equal `filter[attribute][lte]=value`
* In `filter[attribute][in]=value1,value2,value3`
* Not In `filter[attribute][!in]=value1,value2,value3`

### 4. include
```
GET /resource&include=resourceName
```
