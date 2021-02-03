---
layout: main.njk
title: FicusJS components - Custom elements - Sheet
label: Sheet
cssFile:
  - /components/css/sheet.css
demoScript: /js/sheet.js
modulePath: /components/custom-elements/sheet/index.js
tags:
  - customElements
eleventyNavigation:
  key: Sheet
  order: 5
---
# Sheet

Sheet component.

## Example

### Position right

<fc-sheet position="right" class="fu-bg-primary">
  <p>Sheet</p>
</fc-sheet>
<button type="button" id="show-right-sheet-btn">Toggle sheet</button>

### Position top with backdrop

<fc-sheet position="top" backdrop="true" class="fu-bg-primary">
  <p>Sheet</p>
</fc-sheet>
<button type="button" id="show-top-sheet-btn">Toggle sheet</button>

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
