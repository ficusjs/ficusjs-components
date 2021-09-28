---
layout: main.njk
title: FicusJS components - Custom elements - Navbar
label: Navbar
cssFile:
  - /components/html/button/button.css
  - /components/custom-elements/navbar/navbar.css
modulePath: /components/custom-elements/navbar/index.mjs
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
    <svg class="fu-hidden" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"><symbol id="menu" viewBox="0 0 48 48"><path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"/></symbol></svg>
    <nav>
      <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
      <img id="ficus-logo-white" src="../assets/img/ficus-logo-white.svg" width="150" alt="FicusJS Components" style="display: none;">
    </nav>
    <button type="button" class="fc-navbar__toggler">
      <svg><use xlink:href="#menu" href="#menu"></use></svg>
    </button>
    <nav class="fc-navbar__collapse">
      <a href="..." class="fc-button fc-button--link">Docs</a>
      <a href="..." class="fc-button fc-button--link">GitHub</a>
    </nav>
  </fc-navbar>
</div>

```html
<fc-navbar style="width: 100%;">
  <svg class="fu-hidden" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"><symbol id="menu" viewBox="0 0 48 48"><path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"/></symbol></svg>
  <nav>
    <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
    <img id="ficus-logo-white" src="../assets/img/ficus-logo-white.svg" width="150" alt="FicusJS Components" style="display: none;">
  </nav>
  <button type="button" class="fc-navbar__toggler">
    <svg><use xlink:href="#menu" href="#menu"></use></svg>
  </button>
  <nav class="fc-navbar__collapse">
    <a href="..." class="fc-button fc-button--link">Docs</a>
    <a href="..." class="fc-button fc-button--link">GitHub</a>
  </nav>
</fc-navbar>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as navbarModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/navbar'

// use the module
use(navbarModule, { renderer, html })
```

## API
