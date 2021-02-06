---
layout: main.njk
title: FicusJS components - Custom elements - Modal
label: Modal
cssFile:
  - /components/custom-elements/modal/modal.css
demoScript: /js/modal.js
modulePath: /components/custom-elements/modal/index.js
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
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as modalModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/modal/index.js'

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
