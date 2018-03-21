Vanilla JavaScript accordion

[![Build Status](https://travis-ci.org/zoltantothcom/vanilla-js-accordion.svg?branch=master)](https://travis-ci.org/zoltantothcom/vanilla-js-accordion) [![Coverage Status](https://coveralls.io/repos/github/zoltantothcom/vanilla-js-accordion/badge.svg?branch=master)](https://coveralls.io/github/zoltantothcom/vanilla-js-accordion?branch=master) ![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)

Vanilla JavaScript accordion - accessible and super tiny (_**~400 bytes gzipped**_).

*— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/)  framework.*


## Demo

[**ACCORDION**](http://zoltantothcom.github.io/vanilla-js-accordion)


## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
element | string |  | *id* of the accordion container
openTab | int  |  | Accordion tab to start open with. If not defined all tabs closed.
oneOpen | boolean | false | Only one accordion tab can be open at a time.


## Methods

Method | Argument | Description
------ | -------- | -----------
.close(index) | index: int | Closes the accordion tab by index
.open(index) | index: int | Opens the accordion tab by index
.destroy() | | Removes the event listener


## Usage example

```javascript
var accordion = new Accordion({
    element: 'accordion',
    openTab: 2,
    oneOpen: true
});
```


## Running the tests

```
npm test
```


## Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes* | [Polyfill](//cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js) for `.classList` in IE9

\* _IE9 and up_


## License

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

See [Unlicense](http://unlicense.org) for full details.


## Related

* [Vanilla JavaScript **Carousel**](https://github.com/zoltantothcom/vanilla-js-carousel)
* [Vanilla JavaScript **Dropdown**](https://github.com/zoltantothcom/vanilla-js-dropdown)
* [Vanilla JavaScript **Tabs**](https://github.com/zoltantothcom/vanilla-js-tabs)
* [Vanilla JavaScript **Tooltip**](https://github.com/zoltantothcom/vanilla-js-tooltip)
