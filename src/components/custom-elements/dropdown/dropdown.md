---
layout: doc.njk
title: FicusJS components - Custom elements - Dropdown
label: Dropdown
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/dropdown.css
  - /components/css/button.css
modulePath: /components/custom-elements/dropdown/index.js
tags:
  - customElements
---
# Dropdown

A Dropdown displays a list of buttons on temporary surfaces.

## Example

<div class="fd-component-container">
  <fc-dropdown>
    <button type="button" class="fc-button fc-button--link">Item 1</button>
    <button type="button" class="fc-button fc-button--link">Item 2</button>
    <button type="button" class="fc-button fc-button--link">Item 3</button>
  </fc-dropdown>
</div>

```html
<fc-dropdown>
  <button type="button" class="fc-button fc-button--link">Item 1</button>
  <button type="button" class="fc-button fc-button--link">Item 2</button>
  <button type="button" class="fc-button fc-button--link">Item 3</button>
</fc-dropdown>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as dropdownModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/dropdown/index.js'

// use the module
use(dropdownModule, { renderer, html })
```

## API

### Events

| Name | Description | Event details |
| --- | --- | --- |
| toggle | When the dropdown is toggled | `{ instance: Object, isOpen: Boolean }` |

### Styling Hooks

Use these CSS Custom Properties as hooks to customize this component with your own style.

#### Button

Styling hooks for the toggle button.

| Category | Name | Value Type(s) | Fallback Value
| --- | --- | --- | --- |
| Color | `--fc-dropdown-button-color-background` | Color | `var(--primary-color)` |
| Color | `--fc-dropdown-button-color-background-hover` | Color | `var(--primary-dark-color)` |
| Spacing | `--fc-dropdown-button-spacing-padding-y` | Dimension | `var(--spacing-03)` |
| Spacing | `--fc-dropdown-button-spacing-padding-x` | Dimension | `var(--spacing-05)` |
| Sizing | `--fc-dropdown-button-sizing-line-height` | Dimension | `var(--heading-line-height)` |

#### Menu

Styling hooks for the menu.

| Category | Name | Value Type(s) | Fallback Value
| --- | --- | --- | --- |
| Box Shadow | `--fc-dropdown-menu-shadow` | Dimension | `var(--component-shadow-elevation-3)` |
| Color | `--fc-dropdown-menu-color-background` | Color | `var(--component-bg-elevation-3)` |
| Color | `--fc-dropdown-menu-color-border` | Color | `var(--component-border-color)` |
| Spacing | `--fc-dropdown-menu-spacing-padding` | Dimension | `var(--spacing-03)` |
| Spacing | `--fc-dropdown-menu-spacing-margin` | Dimension | `calc(var(--spacing-03) / 2) 0 0` |