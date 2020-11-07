---
layout: doc.njk
title: FicusJS components - Custom elements - Modal
label: Modal
cssFile: /css/modal.css
demoScript: /js/modal.js
modulePath: /components/custom-elements/modal/index.js
tags:
  - customElements
---
# Modal

Modal component.

## Example

<fc-modal>Modal</fc-modal>

<button type="button" class="fc-button" id="show-modal-btn">Show modal</button>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as modalModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/modal/index.js'

// use the module
use(modalModule)
```

## Usage

```html
<fc-modal>Modal</fc-modal>
```

## API

### Events

| Name | Description |
| --- | --- |
| click | When the modal is clicked |
