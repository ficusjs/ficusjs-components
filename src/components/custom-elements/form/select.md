---
layout: doc.njk
title: FicusJS components - Custom elements - Select
input: Select
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/input.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
---
# Select

Select component.

## Example

<fc-select name="selectInput1" label="Text input" help-text="Text input help text">
  <option value=""></option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
  <option value="option5">Option 5</option>
</fc-select>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as formModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule)
```

## Usage

```html
<fc-select name="selectInput1" label="Text input" help-text="Text input help text">
  <option value=""></option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
  <option value="option5">Option 5</option>
</fc-select>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
