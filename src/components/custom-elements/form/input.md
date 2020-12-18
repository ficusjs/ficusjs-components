---
layout: doc.njk
title: FicusJS components - Custom elements - Input
input: Input
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/input.css
modulePath: /components/custom-elements/form/index.js
tags:
  - customElements
---
# Input

Input component.

## Example

<fc-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as formModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/form/index.js'

// use the module
use(formModule)
```

## Usage

```html
<fc-input type="text" name="textInput1" label="Text input" help-text="Text input help text"></fc-input>
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
