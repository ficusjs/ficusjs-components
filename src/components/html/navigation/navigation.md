---
layout: doc.njk
title: FicusJS components - HTML - Navigation
label: Navigation
cssFile: 
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/navigation.css
tags:
  - html
---
# Navigation

Navigation component.

## Example

<nav class="fc-nav">
  <ul class="fc-nav__list">
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a class="fh-is-active" href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
  </ul>
</nav>

```html
<nav class="fc-nav">
  <ul class="fc-nav__list">
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a class="fh-is-active" href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
  </ul>
</nav>
```

## Compact

<nav class="fc-nav fc-nav--compact">
  <ul class="fc-nav__list">
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a class="fh-is-active" href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
  </ul>
</nav>

```html
<nav class="fc-nav fc-nav--compact">
  <ul class="fc-nav__list">
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a class="fh-is-active" href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
    <li>
      <a href="#">Nav Item</a>
    </li>
  </ul>
</nav>
```

## Styling Hooks

| Category | Name | Value Type(s) | Fallback Value
| --- | --- | --- | --- |
| Color | `--fc-nav-anchor-color-link` | Color | `var(--body-color)` |
| Sizing | `--fc-nav-anchor-sizing-padding` | Dimension | `var(--spacer-sm)` |