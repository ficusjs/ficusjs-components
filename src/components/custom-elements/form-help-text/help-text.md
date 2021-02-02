---
layout: doc.njk
title: FicusJS components - Custom elements - Form help text
label: Form help text
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/form-help-text.css
modulePath: /components/custom-elements/form-help-text/index.js
tags:
  - customElements
---
# Form help text

Form help text component.

## Example

<div class="fd-component-container">
  <fc-form-help-text>Form help text</fc-form-help-text>
</div>

```html
<fc-form-help-text>Form help text</fc-form-help-text>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as formHelpTextModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form-help-text/index.js'

// use the module
use(formHelpTextModule, { renderer, html })
```

## Usage

```html
<fc-form-help-text>Form help text</fc-form-help-text>
```
