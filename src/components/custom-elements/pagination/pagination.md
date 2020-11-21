---
layout: doc.njk
title: FicusJS components - Custom elements - Pagination
label: Pagination
cssFile:
  - /css/ficus-globals.css
  - /css/ficus-utilities.css
  - /css/ficus-docs.css
  - /components/css/pagination.css
modulePath: /components/custom-elements/pagination/index.js
tags:
  - customElements
---
# Pagination

Pagination component.

## Example

<fc-pagination total-items="150" current-page="2" page-size="10" max-pages="5"></fc-pagination>

## Importing

```js
import { use } from 'https://unpkg.com/ficusjs?module'
import { module as paginationModule } from 'https://unpkg.com/ficusjs-components@latest/components/custom-elements/pagination/index.js'

// use the module
use(paginationModule)
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