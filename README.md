Vanilla Javascript accordion.
-------

Vanilla Javascript accordion - tiny and simple.

#### Demo

[http://zoltantothcom.github.io/vanilla-js-accordion](http://zoltantothcom.github.io/vanilla-js-accordion)

#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
elem | string |  | CSS class of the accordion container.
openTab | number  | undefined | Accordion tab to start opened with. If not defined - all tabs closed.
oneOpen | boolean | false | Allow one accordion tab only to be opened at a time.
titleClass | string | *.b-accordion__title* | CSS class for accordion titles.
contentClass | string | *.b-accordion__content* | CSS class for content containers.

#### Example

HTML:

```html
<div class="b-accordion">
  
    <div class="b-accordion__title">Title 1</div>
    <div class="b-accordion__content">
        Shabby chic ennui cred godard, forage roof party scenester health goth typewriter pitchfork. Stumptown whatever fap, austin heirloom asymmetrical lo-fi ethical seitan. Post-ironic hella listicle brunch meggings artisan. YOLO tattooed blue bottle, fanny pack gluten-free put a bird on it migas forage trust fund.
    </div>

    <div class="b-accordion__title">Title 2</div>
    <div class="b-accordion__content">
        Shabby chic ennui cred godard, forage roof party scenester health goth typewriter pitchfork. Stumptown whatever fap, austin heirloom asymmetrical lo-fi ethical seitan. Post-ironic hella listicle brunch meggings artisan. YOLO tattooed blue bottle, fanny pack gluten-free put a bird on it migas forage trust fund.
    </div>

    <div class="b-accordion__title">Title 3</div>
    <div class="b-accordion__content">
        Shabby chic ennui cred godard, forage roof party scenester health goth typewriter pitchfork. Stumptown whatever fap, austin heirloom asymmetrical lo-fi ethical seitan. Post-ironic hella listicle brunch meggings artisan. YOLO tattooed blue bottle, fanny pack gluten-free put a bird on it migas forage trust fund.
    </div>
 
    <div class="b-accordion__title">Title 4</div>
    <div class="b-accordion__content">
        Shabby chic ennui cred godard, forage roof party scenester health goth typewriter pitchfork. Stumptown whatever fap, austin heirloom asymmetrical lo-fi ethical seitan. Post-ironic hella listicle brunch meggings artisan. YOLO tattooed blue bottle, fanny pack gluten-free put a bird on it migas forage trust fund.
    </div>
  
</div>
```
Javascript:

```javascript
var accordion = new Accordion({
    elem: 'b-accordion',
    open: 2,
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
