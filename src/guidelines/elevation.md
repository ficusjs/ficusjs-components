---
layout: main.njk
title: FicusJS components - Elevation
label: Elevation
tags:
- guidelines
eleventyNavigation:
  key: Elevation
  order: 2
---
# Elevation

Ficus has a set of elevations that can be used to set a relative distance between two components along the z-axis.

Components at different elevations do the following:

- Allow components to move in front of and behind other components, such as content scrolling behind a navbar
- Reflect spatial relationships, such as how a floating action button’s shadow indicates it is separate from a card collection
- Focus attention on the highest elevation, such as a dialog temporarily appearing in front of other components

Elevation can be depicted using shadows or other visual cues, such as background colours.

Elevation | CSS Properties | Custom Properties | Example
| --- | --- | --- | ---
| 1 | `background-color` <br> `box-shadow` | `--ui-elevation-background-01` <br> `--ui-elevation-shadow-01`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-01); box-shadow: var(--ui-elevation-shadow-01); border: var(--ui-border-04)"></div>
| 2 | `background-color` <br> `box-shadow` | `--ui-elevation-background-02` <br> `--ui-elevation-shadow-02`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-02); box-shadow: var(--ui-elevation-shadow-02); border: var(--ui-border-04)"></div>
| 3 | `background-color` <br> `box-shadow` | `--ui-elevation-background-03` <br> `--ui-elevation-shadow-03`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-03); box-shadow: var(--ui-elevation-shadow-03); border: var(--ui-border-04)"></div>
| 4 | `background-color` <br> `box-shadow` | `--ui-elevation-background-04` <br> `--ui-elevation-shadow-04`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-04); box-shadow: var(--ui-elevation-shadow-04); border: var(--ui-border-04)"></div>
| 5 | `background-color` <br> `box-shadow` | `--ui-elevation-background-05` <br> `--ui-elevation-shadow-05`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-05); box-shadow: var(--ui-elevation-shadow-05); border: var(--ui-border-04)"></div>
| 6 | `background-color` <br> `box-shadow` | `--ui-elevation-background-06` <br> `--ui-elevation-shadow-06`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-06); box-shadow: var(--ui-elevation-shadow-06); border: var(--ui-border-04)"></div>
| 7 | `background-color` <br> `box-shadow` | `--ui-elevation-background-07` <br> `--ui-elevation-shadow-07`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-07); box-shadow: var(--ui-elevation-shadow-07); border: var(--ui-border-04)"></div>
| 8 | `background-color` <br> `box-shadow` | `--ui-elevation-background-08` <br> `--ui-elevation-shadow-08`  | <div style="width: 7rem; height: 4rem; background-color: var(--ui-elevation-background-08); box-shadow: var(--ui-elevation-shadow-08); border: var(--ui-border-04)"></div>

