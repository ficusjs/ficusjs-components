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
      <summary>
        <svg class="fc-accordion_toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
        <span>Accordion item</span>
      </summary>
      <div class="fc-accordion__body">
        Something small enough to escape casual notice.
      </div>
    </details>
    <details class="fc-accordion">
      <summary>
        <svg class="fc-accordion_toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
        <span>Accordion item 2</span>
      </summary>
      <div class="fc-accordion__body">
        Something small enough to escape casual notice.
      </div>
    </details>
    <details class="fc-accordion">
      <summary>
        <svg class="fc-accordion_toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
        <span>Accordion item 3</span>
      </summary>
      <div class="fc-accordion__body">
        Something small enough to escape casual notice.
      </div>
    </details>
  </fc-accordion>
</div>

```html
<fc-accordion>
  <details class="fc-accordion">
    <summary>
      <svg class="fc-accordion_toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
      <span>Accordion item</span>
    </summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
  <details class="fc-accordion">
    <summary>
      <svg class="fc-accordion_toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
      <span>Accordion item 2</span>
    </summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
  <details class="fc-accordion">
    <summary>
      <svg class="fc-accordion_toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
      <span>Accordion item 3</span>
    </summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
</fc-accordion>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as accordionModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/accordion'

// use the component
use(accordionModule, { renderer, html })
```

## API

### Events

| Name | Description |
| --- | --- |
| click | When the accordion is clicked |

### CSS Classes

| Name | Description |
| --- | --- |
| `fc-accordion` | Mandatory. Required on the root element. |
| `fc-accordion__body` | Mandatory. Required on the body element. |

## Styling Hooks

Use these CSS Custom Properties as hooks to customize this component with your own style.

| Category | Styling Hook Name | Value Type(s) | Fallback Value |
| --- | --- | --- | --- |
| Color | `--fc-accordion-color-border` | Color | `--ui-border-02` |
| Sizing | `--fc-accordion-sizing-border` | Dimension | `--ui-border-02` |
| Sizing | `--fc-accordion-svg-sizing` | Dimension | `--icon-02` |
| Spacing | `--fc-accordion-details-spacing` | Dimension | `--spacing-05` |
| Spacing | `--fc-accordion-summary-spacing` | Dimension | `--spacing-05` |
| Spacing | `--fc-accordion-summary-spacing` | Dimension | `--spacing-05` |
| Spacing | `--fc-accordion-svg-spacing` | Dimension | `--spacing-03` |
| Text | `--fc-accordion-summary-text-decoration-color-focus` | Color | `--secondary-color` |
| Text | `--fc-accordion-summary-text-decoration-thickness-focus` | Dimension | `--spacing-01` |
| Text | `--fc-accordion-summary-text-underline-offset-focus` | Dimension | `--spacing-02` |