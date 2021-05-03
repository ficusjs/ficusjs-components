---
layout: main.njk
title: FicusJS components - HTML - Form label
label: Form label
cssFile:
  - /components/html/form-label/form-label.css
tags:
  - forms
eleventyNavigation:
  key: Label
  order: 5
---
# Form label

<div class="fd-component-container">
  <label class="fc-form-label">Form label</label>
</div>

```html
<label class="fc-form-label">Form label</label>
```

## Variations

### Block

Add the `fc-form-label--block` modifier class for a block-level label.

<div class="fd-component-container">
  <label class="fc-form-label fc-form-label--block">Block form label</label>
</div>

```html
  <label class="fc-form-label fc-form-label--block">Block form label</label>
```

### Required

Add the `fc-form-label--required` modifier class to indicate the form element is required.

<div class="fd-component-container">
  <label class="fc-form-label fc-form-label--required">Required form label</label>
</div>

```html
  <label class="fc-form-label fc-form-label--required">Required form label</label>
```
