---
layout: doc.hbs
title: FicusJS components - Custom elements - Modal
label: Modal
cssFile: /css/modal.css
modulePath: /components/custom-elements/modal/index.js
tags:
  - custom-elements
---
# Modal

Modal component.

## Example

<fc-modal>Modal</fc-modal>

<button type="button">Show modal</button>

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
