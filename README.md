Vanilla JavaScript accordion.
-------

Vanilla JavaScript accordion - tiny and simple.

#### Demo

[**Accordion**](http://zoltantothcom.github.io/vanilla-js-accordion)

#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
element | string |  | *id* of the accordion container
openTab | int  |  | Accordion tab to start open with. If not defined all tabs closed.
oneOpen | boolean | false | Only one accordion tab can be open at a time.

#### Usage example

```javascript
var accordion = new Accordion({
    element: 'accordion',
    openTab: 2,
    oneOpen: true
});
```

#### Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes* | -

\* _IE9 and up_

#### License

Free. [Unlicense](http://unlicense.org).
