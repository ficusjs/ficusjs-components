---
layout: main.njk
title: FicusJS components - Styling Hooks
label: Styling Hooks
cssFile:
  - /components/html/button/button.css
tags:
  - guidelines
eleventyNavigation:
  key: Styling Hooks
  order: 4
---
# Styling Hooks

Styling hooks use CSS custom properties which make it easy to customize component styling and express your brand.

---

## What are Styling Hooks

Below is an example of a standard button plus a button changed using Styling Hooks.

**Standard button**

<div class="fd-component-container">
  <button type="button" class="fc-button">Button</button>
</div>

```html
<button type="button" class="fc-button">Button</button>
```

**Button changed with Styling Hooks**

<div class="fd-component-container">
  <button type="button" class="fc-button fc-button--my-css">Button</button>
  <style>
    .fc-button--my-css {
      --fc-button-color-background: #21295c;
      --fc-button-color-background-hover: #1b3b6f;
      --fc-button-color-text: #fff
    }
  </style>
</div>

```html
<button type="button" class="fc-button fc-button--my-css">Button</button>
<style>
  .fc-button--my-css {
    --fc-button-color-background: #21295c;
    --fc-button-color-background-hover: #1b3b6f;
    --fc-button-color-text: #fff
  }
</style>
```

---

## What Does the Code Look Like?

At its heart, styling hooks are constructed using CSS custom properties, (also referred to as CSS variables or cascading variables). Continuing with the button, here are the available Styling Hooks.

```css
.fc-button {
  background: var(--fc-button-color-background, var(--primary-color));
  color: var(--fc-button-color-text, var(--black-color));
  border: 1px solid var(--fc-button-color-border, transparent);
  border-radius: var(--fc-button-radius-border, 2px);  /* CHANGE */
  padding: var(--fc-button-spacing-padding-y, var(--spacing-03)) var(--fc-button-spacing-padding-x, var(--spacing-05));
  line-height: var(--fc-button-line-height, var(--heading-line-height));
  font-family: var(--font-primary);
  /* styles not pertinent have been omitted */
}

.fc-button:focus,
.fc-button:hover {
  background: var(--fc-button-color-background-hover, var(--primary-dark-color));
}
```

Lets take the background color property and break down its associated styling hooks implementation, piece by piece:

`var(--fc-button-color-background, var(--primary-color))`

### var(…)

This is a CSS function that enables you to use the stored value of a CSS custom property. It accepts two arguments: a CSS custom property and an optional fallback value. In our example, `--fc-button-color-background` is our first argument, the CSS custom property, and `var(--primary-color)` is our second argument, the fallback value.

### --fc

Declaring a custom property requires that the name begins with double hyphens (--). `fc` is a namespace reserved for Ficus components.

### -button

`-button` refers to the name of the component that is being targeted by the custom property. In our example, our component is named button so we include button in the name of our custom property.

### -color

To provide predictability, we’ve defined several categories that classify our naming conventions. In this instance, `-color` identifies the category that this CSS custom property falls under.

### -background

This is the semantic user interface property being customized. This example is referencing the `-background` property.

### var(--primary-color)

This is the fallback value if the CSS custom property is not valid. In styling hooks, this value is defined by the global Ficus styles.
