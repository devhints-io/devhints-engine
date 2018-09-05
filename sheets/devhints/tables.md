---
title: Devhints tables
updated: 2018-08-01
intro: >
  This is a reference of styles that you can use on Devhints cheatsheets. How
  meta!

  You can refer to this when contributing your own cheatsheets to the [GitHub
  repo](https://github.com/rstacruz/cheatsheets/).
---

## Tables

<!-- {.-three-column} -->

### Basic table

| Example         | Output                 |
| --------------- | ---------------------- |
| `%m/%d/%Y`      | `06/05/2013`           |
| `%A, %B %e, %Y` | `Sunday, June 5, 2013` |
| `%b %e %a`      | `Jun 5 Sun`            |
| ---             | ---                    |
| `%H:%M`         | `23:05`                |
| `%I:%M %p`      | `11:05 PM`             |

These are separators.

### With h4's

#### Date

| Example         | Output                 |
| --------------- | ---------------------- |
| `%m/%d/%Y`      | `06/05/2013`           |
| `%A, %B %e, %Y` | `Sunday, June 5, 2013` |
| `%b %e %a`      | `Jun 5 Sun`            |

#### Time

| Example    | Output     |
| ---------- | ---------- |
| `%H:%M`    | `23:05`    |
| `%I:%M %p` | `11:05 PM` |

This is a basic table with h4's.

### `.-headers`

| Prefix | Example               | What     |
| ------ | --------------------- | -------- |
| `//`   | `//hr[@class='edge']` | Anywhere |
| `./`   | `./a`                 | Relative |
| `/`    | `/html/body/div`      | Root     |

<!-- {.-headers} -->

Add `{.-headers}` to add headers.

## Shortcuts

<!-- {.-two-column} -->

### `.-shortcuts`

| Shortcut    | Description |
| ----------- | ----------- |
| `V`         | Vector      |
| `P`         | Pencil      |
| `T`         | Text        |
| `L`         | Line        |
| ----------- | --------    |
| `R`         | Rectangle   |
| `O`         | Oval        |
| `U`         | Rounded     |

<!-- {.-shortcuts} -->

Add `{.-shortcuts}` to tables.

### `.-shortcuts-right`

| Description | Shortcut |
| ----------- | -------- |
| Vector      | `V`      |
| Pencil      | `P`      |
| Text        | `T`      |
| Line        | `L`      |
| ----------- | -------- |
| Rectangle   | `R`      |
| Oval        | `O`      |
| Rounded     | `U`      |

<!-- {.-shortcuts-right} -->

Add `{.-shortcuts-right}` to tables.
