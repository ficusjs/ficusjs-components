---
layout: main.njk
title: FicusJS components - HTML - Form fieldset
label: Form fieldset
cssFile:
  - /components/html/form-fieldset/form-fieldset.css
  - /components/custom-elements/form-input/form-input.css
modulePath:
  - /components/custom-elements/form-input/index.js
tags:
  - html
eleventyNavigation:
  key: Fieldset
  order: 2
---
# Form fieldset

<div class="fd-component-container">
  <fieldset class="[ fc-fieldset ] [ fu-flow ]">
    <legend class="fu-text-h4">Form</legend>
    <fc-form-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-form-input>
    <fc-form-input type="text" name="textInput2" label="Text input" help-text="Text input help text"></fc-form-input>
  </fieldset>
</div>

```html
<fieldset class="[ fc-fieldset ] [ fu-flow ]">
  <legend class="fu-text-h4">Form</legend>
  <fc-form-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-form-input>
  <fc-form-input type="text" name="textInput2" label="Text input" help-text="Text input help text"></fc-form-input>
</fieldset>
```
