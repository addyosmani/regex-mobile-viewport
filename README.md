#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Regex for checking HTML has a mobile meta-viewport

Where a mobile meta-viewport is correctly uses `width=device-width` and `initial-scale=1` in the `viewport` meta tag.

## Install

```sh
$ npm install --save regex-mobile-viewport
```


## Usage

```js
var regexmobileviewport = require('regex-mobile-viewport');

regexmobileviewport().test('<meta name="viewport" content="width=device-width, initial-scale=1">');
//=> true

regexmobileviewport().test('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
//=> true

regexmobileviewport().test('<meta name="viewport">');
//=> false
```


## License

MIT © [Addy Osmani](addyosmani.com)


[npm-url]: https://npmjs.org/package/regex-mobile-viewport
[npm-image]: https://badge.fury.io/js/regex-mobile-viewport.svg
[travis-url]: https://travis-ci.org/addyosmani/regex-mobile-viewport
[travis-image]: https://travis-ci.org/addyosmani/regex-mobile-viewport.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/regex-mobile-viewport.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/addyosmani/regex-mobile-viewport
