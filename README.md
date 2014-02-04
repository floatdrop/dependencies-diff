# dependencies-diff [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Merge dependencies and their versions

This module will parse versions in `dependencies` property of `package.json` (or `bower.json`) and tell how much differs they are.

## API

### dependencies-diff(current, fresh)

Returns difference between `current` and `fresh` objects.

## Example

```js
var dd = require('dependencies-diff');

dd({
    express: '3.4.1'
}, {
    express: '4.3.1'
});

/* Returns: 
{ 
    express: {
        major: 1,
        minor: -1,
        patch: 0
    }
}
*/
```

# License

MIT (c) 2013 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/dependencies-diff
[npm-image]: https://badge.fury.io/js/dependencies-diff.png

[travis-url]: http://travis-ci.org/floatdrop/dependencies-diff
[travis-image]: https://travis-ci.org/floatdrop/dependencies-diff.png?branch=master

[depstat-url]: https://david-dm.org/floatdrop/dependencies-diff
[depstat-image]: https://david-dm.org/floatdrop/dependencies-diff.png?theme=shields.io
