---
layout: doc.njk
title: FicusJS components - Custom elements - Form
label: Form
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/form.css
  - /components/css/form-help-text.css
  - /components/css/form-input.css
  - /components/css/form-label.css
  - /components/css/form-select.css
modulePath: 
  - /components/custom-elements/form/index.js
tags:
  - customElements
---
# Form

Form component.

## Example

<div class="fd-component-container">
  <fc-form>
    <fc-input label="Name" type="text" name="name" id="name" help-text="Please enter your name" required="true"></fc-input>
    <fc-input type="submit" name="submit" value="Submit"></fc-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-input label="Name" type="text" name="name" id="name" help-text="Please enter your name" required="true"></fc-input>
  <fc-input type="submit" name="submit" value="Submit"></fc-input>
</fc-form>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as formModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule, { renderer, html })
```

## API

### Form events

The following form events are emitted by the `<fc-form>` component.

| Event | Description |
| --- | --- |
| `reset` | Fires when a `<fc-form>` is reset |
| `submit` | Fires when a `<fc-form>` is submitted |

#### `Event` details

When a form event is emitted, it provides the following additional information about the event.

| Property | Description |
| --- | --- |
| `event.detail.reactiveForm` | The `<fc-form>` instance |
| `event.detail.nativeFormElement` | The native `<form>` element within the `<fc-form>` component |
| `event.detail.formData` | A [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object containing keys/values of the form data |
| `event.detail.data` | An `object` containing keys/values of the form data |
| `event.detail.originalEvent` | The original event |
