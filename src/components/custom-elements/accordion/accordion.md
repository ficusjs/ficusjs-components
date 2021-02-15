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

<div class="fd-component-container">
  <fc-accordion>
    <details class="fc-accordion">
      <summary class="fc-accordion__header">Accordion item 1</summary>
      <div class="fc-accordion__body">
        Something small enough to escape casual notice.
      </div>
    </details>
    <details class="fc-accordion">
      <summary class="fc-accordion__header">Accordion item 2</summary>
      <div class="fc-accordion__body">
        Something small enough to escape casual notice.
      </div>
    </details>
    <details class="fc-accordion">
      <summary class="fc-accordion__header">Accordion item 3</summary>
      <div class="fc-accordion__body">
        Something small enough to escape casual notice.
      </div>
    </details>
  </fc-accordion>
</div>

```html
<fc-accordion>
  <details class="fc-accordion">
    <summary class="fc-accordion__header">Accordion item 1</summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
  <details class="fc-accordion">
    <summary class="fc-accordion__header">Accordion item 2</summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
  <details class="fc-accordion">
    <summary class="fc-accordion__header">Accordion item 3</summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
</fc-accordion>
```

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

## API

### Events

| Name | Description |
| --- | --- |
| click | When the accordion is clicked |
