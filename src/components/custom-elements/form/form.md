---
layout: main.njk
title: FicusJS components - Custom elements - Form
label: Form
cssFile:
  - /components/custom-elements/form/form.css
  - /components/custom-elements/form-input/form-input.css
modulePath:
  - /components/custom-elements/form/index.js
  - /components/custom-elements/form-input/index.js
tags:
  - forms
eleventyNavigation:
  key: Form
  order: 1
---
# Form

Form component.

## Example

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-form-input>
</fc-form>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as formModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/form'

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
