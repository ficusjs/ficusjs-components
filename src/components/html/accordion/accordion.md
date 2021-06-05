---
layout: main.njk
title: FicusJS components - HTML - Accordion
label: Accordion
cssFile:
  - /components/html/accordion/accordion.css
tags:
  - html
eleventyNavigation:
  key: Accordion
  order: 1
---
# Accordion

Accordion component.

<div class="fd-component-container">
  <details class="fc-accordion">
    <summary>
      <svg class="fc-accordion__toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
      <span>Accordion item</span>
    </summary>
    <div class="fc-accordion__body">
      Something small enough to escape casual notice.
    </div>
  </details>
</div>

```html
<details class="fc-accordion">
  <summary>
    <svg class="fc-accordion__toggle-icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z"/></svg>
    <span>Accordion item</span>
  </summary>
  <div class="fc-accordion__body">
    Something small enough to escape casual notice.
  </div>
</details>
```

## API

### CSS Classes

| Name | Description |
| --- | --- |
| `fc-accordion` | Mandatory. Required on the root element. |
| `fc-accordion__toggle-icon` | Optional. Sizes the accordion toggle icon and also provides animation on toggle. |
| `fc-accordion__body` | Mandatory. Required on the body element. |

### SASS

It’s possible to theme an accordion using SASS. As we use CSS Custom properties to style our components we set two arguments, the first is custom property, the second is the SASS fallback variable.

```scss
@use '../../../../node_modules/@ficusjs/styles/src/scss/spacing';
@use '../../../../node_modules/@ficusjs/styles/src/scss/colors';
@use '../../../../node_modules/@ficusjs/styles/src/scss/ui';

// Details
$details-padding:                  var(--spacing-05, spacing.$spacing-05) !default;

// Summary
$summary-margin:                   calc(var(--spacing-05, #{spacing.$spacing-05}) * -1) !default;
$summary-padding:                  var(--spacing-05, spacing.$spacing-05) !default;
$summary-focus-td-color:           var(--secondary-color, colors.$secondary) !default;
$summary-focus-td-thickness:       var(--spacing-01, spacing.$spacing-01) !default;
$summary-focus-td-offset:          var(--spacing-02, spacing.$spacing-02) !default;

// Toggle icon
$toggle-icon-size:                 var(--icon-02, ui.$icon-size-02) !default;
$toggle-icon-margin:               var(--spacing-03, spacing.$spacing-03) !default;
```