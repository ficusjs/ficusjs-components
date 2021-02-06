---
layout: main.njk
title: FicusJS components - Custom elements - Accordion
label: Accordion
cssFile:
  - /components/custom-elements/accordion/accordion.css
modulePath: /components/custom-elements/accordion/index.js
tags:
  - customElements
eleventyNavigation:
  key: Accordion
  order: 1
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
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as accordionModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/accordion/index.js'

// use the component
use(accordionModule, { renderer, html })
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
