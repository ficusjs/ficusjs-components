---
layout: main.njk
title: FicusJS components - HTML - Card
label: Card
cssFile: 
  - /components/html/card/card.css
tags:
  - html
eleventyNavigation:
  key: Card
  order: 3
---
# Card

Card component.

<div class="fd-component-container">
  <div class="fc-card">
    <div class="fc-card__header">
      <h2 class="fu-text-h4">Card title</h2>
      <span>Subtitle</span>
    </div>
    <div class="fc-card__body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

```html
<div class="fc-card">
  <div class="fc-card__header">
    <h2 class="fu-text-h4">Card title</h2>
    <span>Subtitle</span>
  </div>
  <div class="fc-card__body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
```

## API

### CSS Classes

| Name | Description |
| --- | --- |
| `fc-card` | Mandatory. Required on the root element. |
| `fc-card__header` | Optional. Required on the header element. |
| `fc-card__body` | Optional. Required on the body element. |

### Styling Hooks

Use these CSS Custom Properties as hooks to customize this component with your own style.

| Category | Styling Hook Name | Value Type(s) | Fallback Value |
| --- | --- | --- | --- |
| Color | `--fc-card-color-bg` | Color | `--ui-elevation-background-01` |
| Color | `--fc-card-color-border` | Color | `--ui-border-04` |
| Sizing | `--fc-card-sizing-border` | Dimension | `1px` |
| Spacing | `--fc-card-spacing-y` | Dimension | `--spacing-07` |
| Spacing | `--fc-card-spacing-x` | Dimension | `--spacing-07` |
| Radius | `--fc-card-radius-border` | Dimension | `--ui-border-radius-01` |

### SASS

It’s also possible to theme a card using SASS. As we use CSS Custom properties to style our components we set two arguments, the first is the styling hook, the second is the fallback value.

```scss
$padding-y:         var(--fc-card-spacing-y, var(--spacing-07)) !default;
$padding-x:         var(--fc-card-spacing-x, var(--spacing-07)) !default;
$bg-color:          var(--fc-card-color-bg, var(--ui-elevation-background-01)) !default;
$border-width:      var(--fc-card-sizing-border, 1px) !default;
$border-color:      var(--fc-card-color-border, var(--ui-border-04)) !default;
$border-radius:     var(--fc-card-radius-border, var(--ui-border-radius-01)) !default;
```


