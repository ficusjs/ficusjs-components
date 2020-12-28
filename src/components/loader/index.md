---
layout: doc.njk
title: FicusJS components - Loader
label: Loader
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
tags:
  - gettingStarted
---
# Loader

A loader is available for importing multiple components.
The `loadComponents` function is promised-based and can import multiple components.

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the loadComponents function
import { loadComponents } from 'https://unpkg.com/ficusjs-components@latest/components/loader/index.js'

// load the accordion and form components
loadComponents(use, ['accordion', 'form'], { renderer, html })
  .then(() => {
    // do other stuff like create stores and register components
  })
```

When invoking the `loadComponents` function, the following arguments must be provided.

| Argument | Type | Description |
| --- | --- | --- |
| `use` | `function` | The FicusJS `use` function |
| `components` | `array` | The array of form component names to load. For example `['accordion', 'form']` |
| `helpers` | `object` | A helpers object for passing to the module. This must contain the `renderer` function as a named property |
