---
layout: doc.njk
title: FicusJS components - Custom elements - Dropdown
label: Dropdown
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/dropdown.css
modulePath: /components/custom-elements/dropdown/index.js
tags:
  - customElements
---
# Dropdown

Dropdown component.

## Example

<fc-dropdown>
  <button type="button">Item 1</button>
  <button type="button">Item 2</button>
  <button type="button">Item 3</button>
</fc-dropdown>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as dropdownModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/dropdown/index.js'

// use the module
use(dropdownModule, renderer, html)
```

## Usage

```html
<fc-dropdown>
  <button type="button">Item 1</button>
  <button type="button">Item 2</button>
  <button type="button">Item 3</button>
</fc-dropdown>
```

## API

### Events

| Name | Description | Event details |
| --- | --- | --- |
| toggle | When the dropdown is toggled | `{ instance: Object, isOpen: Boolean }` |
