---
layout: main.njk
title: FicusJS components - Custom elements - Pagination
label: Pagination
cssFile:
  - /components/custom-elements/pagination/pagination.css
modulePath: /components/custom-elements/pagination/index.js
tags:
  - customElements
eleventyNavigation:
  key: Pagination
  order: 4
---
# Pagination

Pagination component.

## Example

<fc-pagination total-items="150" current-page="2" page-size="10" max-pages="5"></fc-pagination>

## Importing

```js
// import the required FicusJS functions
import { use } from 'https://unpkg.com/ficusjs?module'

// import the renderer and html tagged template literal from the lit-html library
import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'

// import the component module
import { module as paginationModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/pagination/index.js'

// use the module
use(paginationModule, { renderer, html })
```

## Usage

```html
<fc-pagination total-items="150" current-page="2" page-size="10" max-pages="5"></fc-pagination>
```

## API

### Props

| Name | Description | Required | Default |
| --- | --- | --- | --- |
| totalItems | The total number of items | yes |  |
| currentPage | The current page number | | 1 |
| pageSize | The number of items per page | | 10 |
| maxPages | The maximum number of pages to show in the pagination | | 10 |

### Events

| Name | Description | Event details |
| --- | --- | --- |
| change | When the pagination page changes | `{ instance: Object, pager: Object }` |

The `change` event will emit the pager object in the `Event.details.pager` property.
The pager object contains the current state within the pagination:

```js
{
  totalItems: Number,
  currentPage: Number,
  pageSize: Number,
  totalPages: Number,
  startPage: Number,
  endPage: Number,
  startIndex: Number,
  endIndex: Number,
  pages: Array.<Number>
}
```