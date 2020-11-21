---
layout: doc.njk
title: FicusJS components - Custom elements - Tabs
label: Tabs
cssFile:  
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/tabs.css
modulePath: /components/custom-elements/tabs/index.js
tags:
  - customElements
---
# Tabs

Tabs component.

## Example

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

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as tabsModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/tabs/index.js'

// use the module
use(tabsModule)
```

## Usage

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
