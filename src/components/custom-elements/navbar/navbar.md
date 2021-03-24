---
layout: main.njk
title: FicusJS components - Custom elements - Navbar
label: Navbar
cssFile:
  - /components/html/button/button.css
  - /components/custom-elements/navbar/navbar.css
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
    <svg class="fu-hidden" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg">
      <symbol id="menu" viewBox="0 0 48 48">
        <path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"/>
      </symbol>
    </svg>
    <section>
      <nav>
        <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
        <img id="ficus-logo-white" src="../assets/img/ficus-logo-white.svg" width="150" alt="FicusJS Components" style="display: none;">
      </nav>
    </section>
    <button type="button" class="fc-navbar__toggler">
      <svg><use xlink:href="#menu" href="#menu"></use></svg>
    </button>
    <section class="fc-navbar__collapse">
      <nav>
        <a href="..." class="fc-button fc-button--link">Docs</a>
        <a href="..." class="fc-button fc-button--link">GitHub</a>
      </nav>
    </section>
  </fc-navbar>
</div>

```html
<fc-navbar style="width: 100%;">
  <section>
    <nav>
      <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
      <img id="ficus-logo-white" src="../assets/img/ficus-logo-white.svg" width="150" alt="FicusJS Components" style="display: none;">
    </nav>
  </section>
  <section class="fc-navbar__collapse">
    <nav>
      <a href="..." class="fc-button fc-button--link">Docs</a>
      <a href="..." class="fc-button fc-button--link">GitHub</a>
    </nav>
  </section>
</fc-navbar>
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