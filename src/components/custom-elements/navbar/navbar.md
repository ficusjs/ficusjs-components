---
layout: main.njk
title: FicusJS components - Custom elements - Navbar
label: Navbar
cssFile:
  - /components/css/button.css
  - /components/css/navbar.css
modulePath: /components/custom-elements/navbar/index.js
tags:
  - customElements
eleventyNavigation:
  key: Navbar
  order: 2
---
# Navbar

A Dropdown displays a list of buttons on temporary surfaces.

## Example

<div class="fd-component-container">
  <fc-navbar style="width: 100%;">
    <section class="fc-navbar__section" slot="leftSection">
      <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
    </section>
    <section class="fc-navbar__section" slot="rightSection">
      <a href="..." class="fc-button fc-button--link">Docs</a>
    </section>
    <section class="fc-navbar__section" slot="collapseSection">
      <a href="..." class="fc-button fc-button--link">Docs</a>
      <a href="..." class="fc-button fc-button--link">GitHub</a>
    </section>
  </fc-navbar>
</div>

```html
<fc-navbar style="width: 100%;">
  <section class="fc-navbar__section" slot="leftSection">
    <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
  </section>
  <section class="fc-navbar__section" slot="rightSection">
    <a href="..." class="fc-button fc-button--link">Docs</a>
  </section>
  <section class="fc-navbar__section" slot="collapseSection">
    <a href="..." class="fc-button fc-button--link">Docs</a>
    <a href="..." class="fc-button fc-button--link">GitHub</a>
  </section>
</fc-navbar>
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