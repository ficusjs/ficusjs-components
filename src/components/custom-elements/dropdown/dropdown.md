---
layout: main.njk
title: FicusJS components - Custom elements - Dropdown
label: Dropdown
cssFile:
  - /components/custom-elements/dropdown/dropdown.css
  - /components/html/button/button.css
modulePath: /components/custom-elements/dropdown/index.js
tags:
  - customElements
eleventyNavigation:
  key: Dropdown
  order: 2
---
# Dropdown

A Dropdown displays a list of buttons on temporary surfaces.

## Example

<div class="fd-component-container">
  <fc-dropdown dropdown-title="Example dropdown">
    <button type="button">Item 1</button>
    <button type="button">Item 2</button>
    <button type="button">Item 3</button>
  </fc-dropdown>
</div>

```html
<fc-dropdown dropdown-title="Example dropdown">
  <button type="button">Item 1</button>
  <button type="button">Item 2</button>
  <button type="button">Item 3</button>
</fc-dropdown>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as dropdownModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/dropdown'

// use the module
use(dropdownModule, { renderer, html })
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| dropdownTitle | String | Title of the dropdown  |
| buttonClass | String | Class of the dropdown toggle button. The default is `fc-button`  |

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
| Box Shadow | `--fc-dropdown-menu-shadow` | Dimension | `var(--ui-elevation-shadow-03)` |
| Color | `--fc-dropdown-menu-color-background` | Color | `var(--ui-elevation-background-03)` |
| Color | `--fc-dropdown-menu-color-border` | Color | `var(--ui-border-04)` |
| Spacing | `--fc-dropdown-menu-spacing-padding` | Dimension | `var(--spacing-03)` |
| Spacing | `--fc-dropdown-menu-spacing-margin` | Dimension | `calc(var(--spacing-03) / 2) 0 0` |