---
layout: main.njk
title: FicusJS components - Custom elements - Form textarea
label: Form textarea
cssFile:
  - /components/custom-elements/form/form.css
  - /components/custom-elements/form-textarea/form-textarea.css
modulePath: /components/custom-elements/form-textarea/index.js
tags:
  - customElements
eleventyNavigation:
  key: Textarea
  order: 5
---
# Form textarea

Form textareas enable the user to interact with and input content and data. This component can be used when the expected user input is more than one sentence.

## Example

<div class="fd-component-container">
  <fc-form>
    <fc-form-textarea name="textareaInput1" label="Form textarea" help-text="Form textarea help text"></fc-form-textarea>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-textarea name="textareaInput1" label="Form textarea" help-text="Form textarea help text"></fc-form-textarea>
</fc-form>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as formTextareaModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/form-textarea'

// use the module
use(formTextareaModule, { renderer, html })
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| autocomplete | String | Hint for form autofill feature |
| autofocus | Boolean | Automatically focus the form input when the page is loaded |
| cols | Number | The visible width of the text control, in average character widths |
| disabled | Boolean | Whether the form input is disabled |
| helpText | String | Text which helps a user complete a form input |
| id | String | A unique identifier for the form input |
| inline | Boolean | Show the input on the same horizontal row as other form fields |
| label | String | A caption for the form input |
| maxlength | Number | Maximum length (number of characters) of value |
| minlength | Number | Minimum length (number of characters) of value |
| multiple | Boolean | Whether to allow multiple values |
| name | String | A required string specifying a name for the form input. This name is submitted along with the input's value when the form data is submitted |
| placeholder | String | Text that appears in the form input when it has no value set |
| readonly | Boolean | The value is not editable |
| required | Boolean | A value is required for the form to be submittable |
| rows | Number | The number of visible text lines for the control |
| size | Number | Specifies how much of the input is shown |
| spellcheck | Boolean | Specifies whether the textarea is subject to spell checking by the underlying browser/OS |
| tabindex | Number | An integer attribute indicating if the input is focusable |
| title | String | Text representing advisory information related to the input typically shown as a tooltip |
| wrap | String | Indicates how the control wraps text |

### Events

| Name |Description |
| --- | --- |
| input | Fires when the value of the input changes. This is for each alteration of the input's value |
| change | Fires when an alteration to the input's value is committed by the user |

#### `Event` details

When a `<fc-form-textarea>` event is emitted, it provides the following additional information about the event.

| Property | Description |
| --- | --- |
| `event.detail.component` | The `<fc-form-textarea>` instance |
| `event.detail.nativeFormElement` | The native `<textarea>` element within the component |
| `event.detail.name` | The `name` attribute value |
| `event.detail.value` | The `value` of the component |
| `event.detail.originalEvent` | The original event |
