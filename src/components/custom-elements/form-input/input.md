---
layout: doc.njk
title: FicusJS components - Custom elements - Form input
label: Form input
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/form.css
  - /components/css/form-help-text.css
  - /components/css/form-label.css
  - /components/css/form-input.css
modulePath: /components/custom-elements/form-input/index.js
tags:
  - customElements
eleventyNavigation:
  key: Form input
---
# Form input

Form input component.

## Examples

### Checkbox - single

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="checkbox" name="checkboxInput1" label="Checkbox input" help-text="Checkbox input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="checkbox" name="checkboxInput1" label="Checkbox input" help-text="Checkbox input help text"></fc-form-input>
</fc-form>
```

### Checkbox - switch

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="checkbox" switch="true" name="checkboxInput1" label="Checkbox input" help-text="Checkbox input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="checkbox" switch="true" name="checkboxInput1" label="Checkbox input" help-text="Checkbox input help text"></fc-form-input>
</fc-form>
```

### Checkbox - multiple

<div class="fd-component-container">
  <fc-form>
    <fc-label>Checkboxes</fc-label>
    <fc-form-input type="checkbox" label="Checkbox input 1" name="checkboxInput2"></fc-form-input>
    <fc-form-input type="checkbox" label="Checkbox input 2" name="checkboxInput2"></fc-form-input>
    <fc-form-input type="checkbox" label="Checkbox input 3" name="checkboxInput2"></fc-form-input>
    <fc-form-input type="checkbox" label="Checkbox input 4" name="checkboxInput2"></fc-form-input>
    <fc-help-text>Checkbox input help text</fc-help-text>
  </fc-form>
</div>

```html
<fc-form>
  <fc-label>Checkboxes</fc-label>
  <fc-form-input type="checkbox" label="Checkbox input 1" name="checkboxInput2"></fc-form-input>
  <fc-form-input type="checkbox" label="Checkbox input 2" name="checkboxInput2"></fc-form-input>
  <fc-form-input type="checkbox" label="Checkbox input 3" name="checkboxInput2"></fc-form-input>
  <fc-form-input type="checkbox" label="Checkbox input 4" name="checkboxInput2"></fc-form-input>
  <fc-help-text>Checkbox input help text</fc-help-text>
</fc-form>
```

### Color

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="color" name="colorInput1" value="#ff0000" label="Color input" help-text="Color input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="color" name="colorInput1" value="#ff0000" label="Color input" help-text="Color input help text"></fc-form-input>
</fc-form>
```

### Date

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="date" name="dateInput1" label="Date input" help-text="Date input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="date" name="dateInput1" label="Date input" help-text="Date input help text"></fc-form-input>
</fc-form>
```

### Datetime

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="datetime-local" name="dateTimeInput1" label="Datetime input" help-text="Datetime input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="datetime-local" name="dateTimeInput1" label="Datetime input" help-text="Datetime input help text"></fc-form-input>
</fc-form>
```

### Email

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="email" name="emailInput1" label="Email input" help-text="Email input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="email" name="emailInput1" label="Email input" help-text="Email input help text"></fc-form-input>
</fc-form>
```
### File

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="file" name="fileInput1" label="File input" help-text="File input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="file" name="fileInput1" label="File input" help-text="File input help text"></fc-form-input>
</fc-form>
```

### Hidden

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="hidden" name="hiddenInput1" value="hiddenValue"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="hidden" name="hiddenInput1" value="hiddenValue"></fc-form-input>
</fc-form>
```

### Month

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="month" name="monthInput1" label="Month input" help-text="Month input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="month" name="monthInput1" label="Month input" help-text="Month input help text"></fc-form-input>
</fc-form>
```

### Number

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="number" name="numberInput1" label="Number input" help-text="Number input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="number" name="numberInput1" label="Number input" help-text="Number input help text"></fc-form-input>
</fc-form>
```

### Password

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="password" name="passwordInput1" label="Password input" help-text="Password input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="password" name="passwordInput1" label="Password input" help-text="Password input help text"></fc-form-input>
</fc-form>
```

### Radio

<div class="fd-component-container">
  <fc-form>
    <fc-label>Radios</fc-label>
    <fc-form-input type="radio" label="Radio input 1" name="radioInput2" value="Yes"></fc-form-input>
    <fc-form-input type="radio" label="Radio input 2" name="radioInput2" value="No"></fc-form-input>
    <fc-form-input type="radio" label="Radio input 3" name="radioInput2" value="Maybe"></fc-form-input>
    <fc-help-text>Radio input help text</fc-help-text>
  </fc-form>
</div>

```html
<fc-form>
  <fc-label>Radios</fc-label>
  <fc-form-input type="radio" label="Radio input 1" name="radioInput2" value="Yes"></fc-form-input>
  <fc-form-input type="radio" label="Radio input 2" name="radioInput2" value="No"></fc-form-input>
  <fc-form-input type="radio" label="Radio input 3" name="radioInput2" value="Maybe"></fc-form-input>
  <fc-help-text>Radio input help text</fc-help-text>
</fc-form>
```

### Range

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="range" name="rangeInput1" label="Range input" help-text="Range input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="range" name="rangeInput1" label="Range input" help-text="Range input help text"></fc-form-input>
</fc-form>
```

### Search

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="search" name="searchInput1" label="Search input" help-text="Search input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="search" name="searchInput1" label="Search input" help-text="Search input help text"></fc-form-input>
</fc-form>
```

### Submit

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="submit" name="submitInput1"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="submit" name="submitInput1"></fc-form-input>
</fc-form>
```

### Tel

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="tel" name="telInput1" label="Tel input" help-text="Tel input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="tel" name="telInput1" label="Tel input" help-text="Tel input help text"></fc-form-input>
</fc-form>
```

### Text

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

### Time

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="time" name="timeInput1" label="Time input" help-text="Time input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="time" name="timeInput1" label="Time input" help-text="Time input help text"></fc-form-input>
</fc-form>
```

### URL

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="url" name="urlInput1" label="URL input" help-text="URL input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="url" name="urlInput1" label="URL input" help-text="URL input help text"></fc-form-input>
</fc-form>
```

### Week

<div class="fd-component-container">
  <fc-form>
    <fc-form-input type="week" name="weekInput1" label="Week input" help-text="Week input help text"></fc-form-input>
  </fc-form>
</div>

```html
<fc-form>
  <fc-form-input type="week" name="weekInput1" label="Week input" help-text="Week input help text"></fc-form-input>
</fc-form>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as formInputModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form-input/index.js'

// use the module
use(formInputModule, { renderer, html })
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

When a `<fc-form-input>` event is emitted, it provides the following additional information about the event.

| Property | Description |
| --- | --- |
| `event.detail.component` | The `<fc-form-input>` instance |
| `event.detail.nativeFormElement` | The native `<input>` element within the component |
| `event.detail.name` | The `name` attribute value |
| `event.detail.value` | The `value` of the component |
| `event.detail.originalEvent` | The original event |
