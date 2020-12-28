---
layout: doc.njk
title: FicusJS components - Custom elements - Textarea
label: Textarea
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/help-text.css
  - /components/css/label.css
  - /components/css/textarea.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
---
# Textarea

Textarea component.

## Example

<fc-textarea name="textareaInput1" label="Textarea input" help-text="Textarea input help text"></fc-textarea>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as formModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule)
```

## Usage

```html
<fc-textarea name="textareaInput1" label="Textarea input" help-text="Textarea input help text"></fc-textarea>
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
