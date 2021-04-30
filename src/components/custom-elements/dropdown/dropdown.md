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

### Styling hooks

Use these CSS Custom Properties as hooks to customize this component with your own style.

#### Menu

| Category | Name | Value Type(s) | Fallback Value
| --- | --- | --- | --- |
| Sizing | `--fc-dropdown-menu-sizing-width` | Dimension | `10rem` |
| Spacing | `--fc-dropdown-menu-spacing-padding` | Dimension | `var(--spacing-03)` |
| Spacing | `--fc-dropdown-menu-spacing-margin` | Dimension | `calc(var(--spacing-03) / 2) 0 0` |
| Color | `--fc-dropdown-menu-color-background` | Color | `var(--ui-elevation-background-03)` |
| Color | `--fc-dropdown-menu-color-border` | Color | `var(--ui-border-04)` |
| Shadow | `--fc-dropdown-menu-shadow` | | `var(--ui-elevation-shadow-03)` |
| Radius | `--fc-dropdown-menu-radius-border` | | `0.25rem` |

#### Menu link

| Category | Name | Value Type(s) | Fallback Value
| --- | --- | --- | --- |
| Spacing | `--fc-dropdown-menu-link-spacing-padding-y` | Dimension | `var(--spacing-03)` |
| Spacing | `--fc-dropdown-menu-link-spacing-padding-x` | Dimension | `var(--spacing-05)` |
| Color | `--fc-dropdown-menu-link-color-background` | Color | `transparent` |
| Color | `--fc-dropdown-menu-link-hover-color-background` | Color | `var(--ui-elevation-background-03)` |
| Color | `--fc-dropdown-menu-link-color-link` | Color | `var(--ui-color)` |

### SASS

It’s also possible to theme dropdowns using SASS. As we use CSS Custom properties to style our components we set two arguments, the first is the styling hook, the second is the fallback value.

```scss
// Menu
$menu-min-width:                  var(--fc-dropdown-menu-sizing-width, 10rem);
$menu-margin:                     var(--fc-dropdown-menu-spacing-margin, calc(var(--spacing-03) / 2) 0 0);
$menu-padding:                    var(--fc-dropdown-menu-spacing-padding, var(--spacing-03) 0);
$menu-bg-color:                   var(--fc-dropdown-menu-color-background, var(--ui-elevation-background-02));
$menu-border:                     1px solid var(--fc-dropdown-menu-color-border, var(--ui-border-03));
$menu-box-shadow:                 var(--fc-dropdown-menu-shadow, var(--ui-elevation-shadow-02));
$menu-border-radius:              var(--fc-dropdown-menu-radius-border, 0.25rem);

// Menu link
$menu-link-padding:               var(--fc-dropdown-menu-link-spacing-padding-y, var(--spacing-03)) var(--fc-dropdown-menu-link-spacing-padding-x, var(--spacing-05));
$menu-link-bg-color:              var(--fc-dropdown-menu-link-color-background, transparent);
$menu-link-bg-color-hover:        var(--fc-dropdown-menu-link-hover-color-background, var(--ui-elevation-background-03));
$menu-link-color:                 var(--fc-dropdown-menu-link-color-link, var(--ui-color));
```