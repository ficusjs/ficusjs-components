---
layout: main.njk
title: Ficus components - Components
label: Components
tags:
- gettingStarted
eleventyNavigation:
  key: Components
  order: 1
---
# Components

Ficus components is a library of styled custom elements and HTML elements.

---

## Custom elements

The custom elements provide specific HTML elements and are written using [FicusJS](https://github.com/ficusjs/ficusjs).

The custom elements are deployed to a [CDN](https://www.skypack.dev/view/@ficusjs/components) and should be consumed using ES module imports.

### Renderers

Each custom element requires a template literal renderer to work.

The following template literal renderers are available with the [FicusJS renderers library](https://github.com/ficusjs/ficusjs-renderers):

- htm
- htm and Preact
- lit-html
- uhtml

**The built-in renderer cannot be used because of specific internal rendering requirements within each component.**

---

## HTML elements

The HTML elements are a set of CSS classes for styling DOM elements.
