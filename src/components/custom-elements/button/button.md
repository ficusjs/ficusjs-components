---
layout: doc.hbs
title: FicusJS components - Custom elements - Button
label: Button
tags:
  - custom-elements
---
# Button

Button component.

## Example

<fc-button>Button</fc-button>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as buttonModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/button/index.js'

// use the module
use(buttonModule)
```

## Usage

```html
<fc-button>Button</fc-button>
```

## API

### Events

| Name | Description |
| --- | --- |
| click | When the button is clicked |
