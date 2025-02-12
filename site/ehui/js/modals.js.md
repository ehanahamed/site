# modals.js

This script has a bunch of functions to easily manage modals using js.

## .list

The `modals.list` property is an array of all modals created using `modals.create()`, so that these modals can be manipulated later.

Also see `useList` parameter of `modals.create()` for more information. (docs for `modals.create()` is below)

## .create()

The `modals.create()` function accepts one parameter, an object.

### Parameters & usage

`modals.create()` accepts a single parameter, an object.

The object looks like this:

```javascript
modals.create({
  title: "string",
  body: "string",
  actions: [
    {
      tag: "string", /* either "a" or "button" */
      text: "string", /* button or link-button text */
      href: "string", /* only used if .tag is "a" */
      onClick: function () { doSomething() }, /* only used if .tag is "button" */
      classList: [] /* array of optional classes as strings */
      /* if [0] is "a", ".button" class gets added automatically */
    },
  ],
  useList: boolean, /* defaults to true */
  /*
    if true, modal element is added to modals.list,
    and modals.create() returns index of element on modals.list
    
    if false, modal element is NOT added to modals.list,
    and modals.create() returns the modal's html element
  */
  classList: [], /* array of optional modal classes as strings */
  /* ".modal" is added automatically */
  contentClassList: [] /* array of optional modal > content classes as strings */
  /* ".content* is added automatically */

  /*
    classList applies classes to:
    <div class="modal THIS">
      <div class="content">
      </div>
    </div>

    contentClassList applies classes to:
    <div class="modal">
      <div class="content THIS">
      </div>
    </div>
  */
});

/*
  or, if complex-er html is needed, use:
*/
modals.create({
  innerHtml: "string",
  classList: [] /* array of optional modal classes as strings */
  /* ".modal" is added automatically */
  useList: boolean, /* defaults to true */
  /*
    if true, modal element is added to modals.list,
    and modals.create() returns index of element on modals.list
    
    if false, modal element is NOT added to modals.list,
    and modals.create() returns the modal's html element
  */
})
```

An example (will be) below:
```
work in progress
```
