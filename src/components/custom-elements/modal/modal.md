---
layout: main.njk
title: FicusJS components - Custom elements - Modal
label: Modal
cssFile:
  - /components/custom-elements/modal/modal.css
demoScript: /js/modal.js
modulePath: /components/custom-elements/modal/index.mjs
tags:
  - customElements
eleventyNavigation:
  key: Modal
  order: 3
---
# Modal

Modal component.

## Example

<fc-modal>
  <div class="fc-modal__header">Header</div>
  <div class="fu-bg-body-bg">
    <p>Modal content</p>
  </div>
  <div class="fc-modal__footer">Footer</div>
</fc-modal>

<button type="button" class="fc-button" id="show-modal-btn">Show modal</button>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as modalModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/modal'

// use the module
use(modalModule, { renderer, html })
```

## Usage

```html
<fc-modal>
  <div class="fc-modal__header">Header</div>
  <div class="fu-bg-body-bg">
    <p>Modal content</p>
  </div>
  <div class="fc-modal__footer">Footer</div>
</fc-modal>
```

## API

### Events

| Name | Description |
| --- | --- |
| click | When the modal is clicked |
