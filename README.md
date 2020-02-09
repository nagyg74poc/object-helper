# object-helper #

Private Node module to provide helper functions to objects.  
version 1.0.5

## Setup

#### Install

```
npm install object-helper
```

#### Build

```
npm run build
```

#### Test

```
npm test
npm run test:coverage
```

#### Dependencies

* "object-mapper": "^5.0.0"

## Usage

### ObjectMapper functions ####

These functions are extending [object-mapper](https://github.com/wankdanker/node-object-mapper) node module functions.  
Copy properties from one Object to another based on a separate Object, which defines how the properties should be mapped.

```
ObjectMapper {
   merge<S, T>(fromObject: S, destObject: T | object, mapper: object): T | null
   map<S, T>(fromObject: S, mapper: object): T | null
   mapTo<S, T>(fromObject: S, toObject: T, mapper: object): T | null
   mapArray<S, T>(fromObjectArray: S[], mapper: object): ( T | null )[]
   mapPromise<S, T>(promise: Promise<S>, mapper: object): Promise<T | null>
   mapArrayPromise<S, T>(promise: Promise<S[]>, mapper: object): Promise<( T | null )[]>
}
```

##### map(fromObject [, destObject], mapper)

```
var map = require('@ko-utils/object-helper').map;

var mapper = {
  "foo": [
    {
      key: "foo",
      transform: function (value) { 
        return value + "_foo";
      }
    },
    {
      key: "baz",
      transform: function (value) {
        return value + "_baz";
      }
    }
  ],
  "bar": "bar"
};

var src = {
	foo: 'blah',
	bar: 'something'
};

var dest = map(src, mapper);

// dest.foo: 'blah_foo'
// dest.baz: 'blah_baz'
// dest.bar: 'something' 
```

##### mapArray(fromObjectArray, mapper)

Executes the mapping on every array item.

```
var mapArray = require('@ko-utils/object-helper').mapArray;

var mapper = {
  "foo": "baz",
  "bar": "barrrr"
};

var src = [
  {
	foo: 'blah1',
	bar: 'something1'
  }, {
	foo: 'blah2',
	bar: 'something2'
  }
];

var dest = map(src, mapper);

// dest[0].baz: 'blah1'
// dest[0].barrrr: 'something1'
// dest[1].baz: 'blah2'
// dest[1].barrrr: 'something2'
```

##### mapPromise(promise, mapper)

Returns a promise with the mapped result.

##### mapArrayPromise(promise, mapper)

Returns a promise with the mapped result array.

### ObjectAttribute functions ####

```
ObjectAttribute {
   getByArray(path: string[]): (obj: object) => any | null
   getByString(path: string): (obj: object) => any | null
   byString(path: string, obj: {}): any | null
   hasValueInObjectArray(valueKey: string, value: any, arrayOfObjects: any[]): boolean
}
```

##### getByArray(path)
##### getByString(path)
##### byString(path, obj)
##### hasValueInObjectArray(valueKey, value, arrayOfObjects)
