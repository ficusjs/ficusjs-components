---
layout: doc.njk
title: FicusJS components - Custom elements - Sheet
label: Sheet
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/sheet.css
modulePath: /components/custom-elements/sheet/index.js
tags:
  - customElements
---
# Sheet

Sheet component.

## Example

### Position right

<fc-sheet position="right">
  <p>Sheet</p>
</fc-sheet>

### Position top with backdrop

<fc-sheet position="top" backdrop="true">
  <p>Sheet</p>
</fc-sheet>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as sheetModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/sheet/index.js'

// use the module
use(sheetModule, { renderer, html })
```

## Usage

```html
<fc-sheet>Sheet</fc-sheet>
```

## API

### Events

| Name | Description |
| --- | --- |
| close | When the sheet is closed |
| show | When the sheet is shown |
