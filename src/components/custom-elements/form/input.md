---
layout: doc.njk
title: FicusJS components - Custom elements - Input
label: Input
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/help-text.css
  - /components/css/label.css
  - /components/css/input.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
eleventyNavigation:
  key: Input
---
# Input

Input component.

## Examples

### Checkbox - single

<fc-input type="checkbox" name="checkboxInput1" label="Checkbox input" help-text="Checkbox input help text"></fc-input>

### Checkbox - switch

<fc-input type="checkbox" switch="true" name="checkboxInput1" label="Checkbox input" help-text="Checkbox input help text"></fc-input>

### Checkbox - multiple

<fc-label>Checkboxes</fc-label>
<fc-input type="checkbox" label="Checkbox input 1" name="checkboxInput2"></fc-input>
<fc-input type="checkbox" label="Checkbox input 2" name="checkboxInput2"></fc-input>
<fc-input type="checkbox" label="Checkbox input 3" name="checkboxInput2"></fc-input>
<fc-input type="checkbox" label="Checkbox input 4" name="checkboxInput2"></fc-input>
<fc-help-text>Checkbox input help text</fc-help-text>

### Color

<fc-input type="color" name="textInput1" value="#ff0000" label="Text input" help-text="Text input help text"></fc-input>

### Date

<fc-input type="date" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Date/time

<fc-input type="datetime-local" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Email

<fc-input type="email" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### File

<fc-input type="file" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Hidden

<fc-input type="hidden" name="textInput1" value="hiddenValue"></fc-input>

### Month

<fc-input type="month" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Number

<fc-input type="number" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Password

<fc-input type="password" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Radio

<fc-label>Radios</fc-label>
<fc-input type="radio" label="Radio input 1" name="radioInput2" value="Yes"></fc-input>
<fc-input type="radio" label="Radio input 2" name="radioInput2" value="No"></fc-input>
<fc-input type="radio" label="Radio input 3" name="radioInput2" value="Maybe"></fc-input>
<fc-help-text>Radio input help text</fc-help-text>

### Range

<fc-input type="range" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Search

<fc-input type="search" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Submit

<fc-input type="submit" name="textInput1"></fc-input>

### Tel

<fc-input type="tel" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Text

<fc-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Time

<fc-input type="time" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### URL

<fc-input type="url" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

### Week

<fc-input type="week" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

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

## Usage

```html
<fc-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| accept | String | Hint for expected file type in file input |
| autocomplete | String | Hint for form autofill feature |
| autofocus | Boolean | Automatically focus the form input when the page is loaded |
| capture | String | Media capture input method in file input |
| checked | Boolean | Whether the checkbox or radio input is checked |
| dirname | String | Name of form field to use for sending the input's directionality in form submission |
| disabled | Boolean | Whether the form input is disabled |
| helpText | String | Text which helps a user complete a form input |
| id | String | A unique identifier for the form input |
| inline | Boolean | Show the input on the same horizontal row as other form fields |
| inputmode | String | Provide a hint to browsers as to the type of virtual keyboard configuration to use when editing this input |
| label | String | A caption for the form input |
| list | String | Value of the id attribute of the `<datalist>` of autocomplete options |
| max | Number | Maximum value |
| maxlength | Number | Maximum length (number of characters) of value |
| min | Number | Minimum value |
| minlength | Number | Minimum length (number of characters) of value |
| multiple | Boolean | Whether to allow multiple values |
| name | String | A required string specifying a name for the form input. This name is submitted along with the input's value when the form data is submitted |
| pattern | String | Pattern the value must match to be valid |
| placeholder | String | Text that appears in the form input when it has no value set |
| readonly | Boolean | The value is not editable |
| required | Boolean | A value is required for the form to be submittable |
| size | Number | Specifies how much of the input is shown |
| step | Number | Incremental values that are valid for numeric inputs |
| tabindex | Number | An integer attribute indicating if the input is focusable |
| title | String | Text representing advisory information related to the input typically shown as a tooltip |
| type | String | Type of form input |
| value | String | At first, the initial value if specified explicitly in HTML. More generally, the current value of the form input. Submitted with the form as part of a name/value pair |

### Events

| Name |Description |
| --- | --- |
| input | Fires when the value of the input changes. This is for each alteration of the input's value |
| change | Fires when an alteration to the input's value is committed by the user |

#### `Event` details

When a `<fc-input>` event is emitted, it provides the following additional information about the event.

| Property | Description |
| --- | --- |
| `event.detail.component` | The `<fc-input>` instance |
| `event.detail.nativeFormElement` | The native `<input>` element within the component |
| `event.detail.name` | The `name` attribute value |
| `event.detail.value` | The `value` of the component |
| `event.detail.originalEvent` | The original event |
