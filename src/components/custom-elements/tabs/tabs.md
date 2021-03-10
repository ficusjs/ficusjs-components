---
layout: main.njk
title: FicusJS components - Custom elements - Tabs
label: Tabs
cssFile:
  - /components/custom-elements/tabs/tabs.css
modulePath: /components/custom-elements/tabs/index.js
tags:
  - customElements
eleventyNavigation:
  key: Tabs
  order: 6
---
# Tabs

Tabs component.

<div class="fd-component-container">
  <fc-tabs>
    <fc-tab-pane label="Tab 1">
      <p>Tab pane 1</p>
    </fc-tab-pane>
    <fc-tab-pane label="Tab 2" disabled="true">
      <p>Tab pane 2</p>
    </fc-tab-pane>
    <fc-tab-pane label="Tab 3">
      <p>Tab pane 3</p>
    </fc-tab-pane>
  </fc-tabs>
</div>

```html
<fc-tabs>
  <fc-tab-pane label="Tab 1">
    <p>Tab pane 1</p>
  </fc-tab-pane>
  <fc-tab-pane label="Tab 2" disabled="true">
    <p>Tab pane 2</p>
  </fc-tab-pane>
  <fc-tab-pane label="Tab 3">
    <p>Tab pane 3</p>
  </fc-tab-pane>
</fc-tabs>
```

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://cdn.skypack.dev/ficusjs'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers/lit-html'

// import the component module
import { module as tabsModule } from 'https://cdn.skypack.dev/@ficusjs/components/custom-elements/tabs'

// use the module
use(tabsModule, { renderer, html })
```

## API

### Props

| Name | Type | Description |
| --- | --- | --- |
| label | String | The tab label |
| disabled | Boolean | Disable the tab |

### Events

| Name | Description | Details |
| --- | --- | --- |
| change | When the tab changes | `{ instance, value }` |
