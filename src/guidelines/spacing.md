---
layout: doc.njk
title: FicusJS components - Spacing
label: Spacing
cssFile:
- /css/ficus-globals.css
- /css/ficus-utilities.css
- /css/ficus-docs.css
tags:
- gettingStarted
---
# Spacing

Ficus has two spacing scales; one for general spacing within components and the other for layout spacing. Both are designed to complement the existing components and typography throughout the system. The two scales have certain overlapping values that serve two different roles, so be mindful when picking a spacing token.

| Scale | Purpose |
| --- | --- |
| Spacing scale | Used for smaller, more refined spacing needs, specifically within the context of a component (i.e. the space between a label and a text input).
| Layout scale | Typically used for positioning components on a page (i.e., the space between a text field and a selector).

---

## Applying spacing

Both the spacing and the layout scales can be applied to `margin` or `padding` properties. Likewise, these spacing custom properties can be applied to both vertical and horizontal edges. The token takes the place of the values normally assigned to `margin` and `padding`. The following are all approved ways to syntactically apply Ficus spacing tokens:

```css
margin: var(spacing-03);
margin: var(layout-03) var(layout-01);
margin: var(spacing-07) 0 var(spacing-04 0);
margin-right: var(layout-05);
padding: var(spacing-04);
padding: var(layout-05) var(layout-03);
padding: var(spacing-07) var(spacing-04) 0 var(spacing-04);
```

---

## Spacing scale

Use the spacing scale when building individual components. It includes small increments needed to create appropriate spatial relationships for detail-level designs. This scale is applied and used within all Ficus components.

| Custom property | rem | px
| --- | --- | ---
| var(spacing-01) | 0.125 | 2
| var(spacing-02) | 0.25 | 4
| var(spacing-03) | 0.5 | 8
| var(spacing-04) | 0.75 | 12
| var(spacing-05) | 1 | 16
| var(spacing-06) | 1.5 | 24
| var(spacing-07) | 2 | 32
| var(spacing-08) | 2.5 | 40
| var(spacing-09) | 3 | 48

---

## Layout scale

The layout scale is used for arranging components and other UI parts into a full page layout. It has larger increments that are used to control the density of a design. Use the smaller layout tokens to create more dense compositions and direct relationships. Use the larger custom properties to increase the amount of white space and to disassociate sections.

| Custom property | rem | px
| --- | --- | ---
| var(layout-01) | 1 | 16
| var(layout-02) | 1.5 | 24
| var(layout-03) | 2 | 32
| var(layout-04) | 3 | 48
| var(layout-05) | 4 | 64
| var(layout-06) | 6 | 96
| var(layout-07) | 10 | 160