---
layout: main.njk
title: FicusJS components - HTML - Button
label: Button
cssFile: 
  - /components/css/button.css
tags:
  - html
eleventyNavigation:
  key: Button
  order: 2
---
# Button

Add the `fc-button` class to `<a>`, `<input>` or `<button>` elements for a default button. 

<div class="fd-component-container">
  <button type="button" class="fc-button">Button</button>
</div>

```html
  <button type="button" class="fc-button">Button</button>
```

## Variations

### Link

Add the `fc-button--link` modifier class for a button styled as a link. 

<div class="fd-component-container">
  <button type="button" class="fc-button fc-button--link">Button</button>
</div>

```html
  <button type="button" class="fc-button fc-button--link">Button</button>
```