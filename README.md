Vanilla JavaScript accordion
-------

[![Build Status](https://travis-ci.org/zoltantothcom/vanilla-js-accordion.svg?branch=master)](https://travis-ci.org/zoltantothcom/vanilla-js-dropdown) [![Coverage Status](https://coveralls.io/repos/github/zoltantothcom/vanilla-js-accordion/badge.svg?branch=master)](https://coveralls.io/github/zoltantothcom/vanilla-js-dropdown?branch=master) ![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)

Vanilla JavaScript accordion - accessible and super tiny (*~400 bytes gzipped*).

*— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/)  framework.*


---
## Demo

[**Accordion**](http://zoltantothcom.github.io/vanilla-js-accordion)


---
## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
element | string |  | *id* of the accordion container
openTab | int  |  | Accordion tab to start open with. If not defined all tabs closed.
oneOpen | boolean | false | Only one accordion tab can be open at a time.


---
## Methods

Method | Argument | Description
------ | -------- | -----------
.close(index) | index: int | Closes the accordion tab by index
.open(index) | index: int | Opens the accordion tab by index


---
## Usage example

```javascript
var accordion = new Accordion({
    element: 'accordion',
    openTab: 2,
    oneOpen: true
});
```


---
## Run the tests

```
npm test
```


---
## Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes* | [Polyfill](//cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js) for `.classList` in IE9

\* _IE9 and up_


---
## License

Free to use and modify. [Unlicense](http://unlicense.org).
