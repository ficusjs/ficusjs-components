---
layout: main.njk
title: FicusJS components - HTML - Navigation
label: Navigation
cssFile: 
  - /components/css/navigation.css
tags:
  - html
eleventyNavigation:
  key: Navigation
  order: 6
---
# Navigation

Navigation component.

<div class="fd-component-container">
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
</div>

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

<div class="fd-component-container">
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
</div>

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
| Sizing | `--fc-nav-anchor-sizing-padding` | Dimension | `var(--spacing-03)` |