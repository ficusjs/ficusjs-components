---
layout: doc.njk
title: FicusJS components - Components
label: Components
cssFile:
- /css/ficus-globals.css
- /css/ficus-utilities.css
- /css/ficus-docs.css
tags:
- gettingStarted
---
# Components

The FicusJS components is a collection of styled custom elements and HTML elements.

The components are deployed to a CDN and must be consumed by URL using ES module imports.

---

## Custom elements

The custom elements provide specific HTML elements using Javascript.

### Renderers

A template literal renderer **must** be passed to the FicusJS components in order to use them.

The following template literal renderers are available:

- lit-html
- uhtml
- htm and Preact

**The `document.createElement` renderer cannot be used because of specific internal rendering within each component.**

---

## HTML elements

The HTML elements are a set of CSS classes for styling DOM elements.
