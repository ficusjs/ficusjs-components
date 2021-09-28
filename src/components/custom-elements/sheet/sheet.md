---
layout: main.njk
title: FicusJS components - Custom elements - Sheet
label: Sheet
cssFile:
  - /components/custom-elements/sheet/sheet.css
demoScript: /js/sheet.js
modulePath: /components/custom-elements/sheet/index.mjs
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

<div class="fd-component-container">
  <fc-sheet position="right" class="fu-bg-primary"></fc-sheet>
  <button type="button" class="fc-button" id="show-right-sheet-btn">Toggle sheet</button>
</div>

```html
<fc-sheet position="right" class="fu-bg-primary"></fc-sheet>
<button type="button" class="fc-button" id="show-right-sheet-btn">Toggle sheet</button>
```

### Position top with backdrop

<div class="fd-component-container">
  <fc-sheet position="top" backdrop="true" class="fu-bg-primary">
    <button type="button" class="fc-button" id="show-top-sheet-close-btn">Toggle sheet</button>
  </fc-sheet>
  <button type="button" class="fc-button" id="show-top-sheet-btn">Toggle sheet</button>
</div>

```html
<fc-sheet position="top" backdrop="true" class="fu-bg-primary"></fc-sheet>
<button type="button" class="fc-button" id="show-top-sheet-btn">Toggle sheet</button>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as sheetModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/sheet'

// use the module
use(sheetModule, { renderer, html })
```

## API

### Events

| Name | Description |
| --- | --- |
| close | When the sheet is closed |
| show | When the sheet is shown |
