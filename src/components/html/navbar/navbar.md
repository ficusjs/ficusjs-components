---
layout: main.njk
title: FicusJS components - HTML - Navbar
label: Navbar
cssFile:
  - /components/html/button/button.css
  - /components/custom-elements/navbar/navbar.css
tags:
  - html
eleventyNavigation:
  key: Navbar
  order: 5
---
# Navbar

Navbar component.

## Example

<div class="fd-component-container">
  <nav class="fc-navbar" style="width: 100%">
    <section>
      <nav>
        <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
        <img id="ficus-logo-white" src="../assets/img/ficus-logo-white.svg" width="150" alt="FicusJS Components" style="display: none;">
      </nav>
    </section>
    <section>
      <nav>
        <a href="..." class="fc-button fc-button--link">Docs</a>
        <a href="..." class="fc-button fc-button--link">GitHub</a>
      </nav>
    </section>
  </nav>
</div>

```html
  <nav class="fc-navbar">
    <section>
      <nav>
        <img id="ficus-logo" src="../assets/img/ficus-logo.svg" width="150" alt="FicusJS Components">
        <img id="ficus-logo-white" src="../assets/img/ficus-logo-white.svg" width="150" alt="FicusJS Components" style="display: none;">
      </nav>
    </section>
    <section>
      <nav>
        <a href="..." class="fc-button fc-button--link">Docs</a>
        <a href="..." class="fc-button fc-button--link">GitHub</a>
      </nav>
    </section>
  </nav>
```

