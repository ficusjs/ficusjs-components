---
layout: doc.njk
title: FicusJS components - Custom elements - Accordion
label: Accordion
cssFile: /css/accordion.css
modulePath: /components/custom-elements/accordion/index.js
tags:
  - customElements
---
# Accordion

All collapsible `<details>` elements under the accordion component will be closed when an item is opened.

## Example

<fc-accordion>
  <details class="fc-accordion">
    <summary>Accordion item 1</summary>
    Something small enough to escape casual notice.
  </details>
  <details class="fc-accordion">
    <summary>Accordion item 2</summary>
    Something small enough to escape casual notice.
  </details>
  <details class="fc-accordion">
    <summary>Accordion item 3</summary>
    Something small enough to escape casual notice.
  </details>
</fc-accordion>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as accordionModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/accordion/index.js'

// use the module
use(accordionModule)
```

## Usage

```html
<fc-accordion>
  <details class="fc-accordion">
    <summary>Accordion item 1</summary>
    Something small enough to escape casual notice.
  </details>
  <details class="fc-accordion">
    <summary>Accordion item 2</summary>
    Something small enough to escape casual notice.
  </details>
  <details class="fc-accordion">
    <summary>Accordion item 3</summary>
    Something small enough to escape casual notice.
  </details>
</fc-accordion>
```

## API

### Events

| Name | Description |
| --- | --- |
| click | When the accordion is clicked |
