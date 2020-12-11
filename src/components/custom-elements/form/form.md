---
layout: doc.njk
title: FicusJS components - Custom elements - Form
label: Form
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
---
# Form

Form component.

## Example

<fc-form>
  <label for="name">Name</label>
  <input type="text" name="name" id="name">
  <button type="submit">Submit</button>
</fc-form>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as formModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule)
```

## Usage

```html
<fc-form>
  <label for="name">Name</label>
  <input type="text" name="name" id="name">
  <button type="submit">Submit</button>
</fc-form>
```

## API

### Events

| Name | Description | Event details |
| --- | --- | --- |
| submit | When the form is submitted | `{ form: Object, nativeFormElement: HTMLFormElement, formData: FormData, data: Object, originalEvent: Object }` |
| reset | When the form is reset | `{ form: Object, nativeFormElement: HTMLFormElement, formData: FormData, data: Object, originalEvent: Object }` |
