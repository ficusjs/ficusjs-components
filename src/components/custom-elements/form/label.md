---
layout: doc.njk
title: FicusJS components - Custom elements - Label
label: Label
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/label.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
---
# Label

Label component.

## Example

<fc-label>Form label</fc-label>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as formModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule)
```

## Usage

```html
<fc-label>Form label</fc-label>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| for | String | The `id` of a labelable form-related element in the same document as the `<fc-label>` element |
| block | Boolean | Display the label as a block-level element |
| required | Boolean | Indicate the element related to this label is required and show an asterisk |
