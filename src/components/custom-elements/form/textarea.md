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
