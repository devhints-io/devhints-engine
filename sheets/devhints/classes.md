---
title: Devhints CSS classes
updated: 2018-08-01
intro: >
  This is a reference of styles that you can use on Devhints cheatsheets. How
  meta!

  You can refer to this when contributing your own cheatsheets to the [GitHub
  repo](https://github.com/rstacruz/cheatsheets/).
---

## Intro

## Variants

<!-- {.-three-column} -->

### H2 sections

| Class             | Description                         |
| ----------------- | ----------------------------------- |
| `-one-column`     |                                     |
| `-two-column`     | _(default)_                         |
| `-three-column`   |                                     |
| `-left-reference` | 3 columns<br>_(short first column)_ |
| `-no-hide`        | Don't hide H2                       |

See: [H2 sections](#two-columns)

### H3 sections

| Class    | Description |
| -------- | ----------- |
| `-prime` | Highlight   |

See: [H3 sections](#h3-sections-1)

### Tables

| Class         | Description                   |
| ------------- | ----------------------------- |
| `-bold-first` | Bold first column             |
| `-headers`    | Show headers                  |
| `-left-align` | Don't right align last column |
| `-mute-em`    | Lower opacity for italics     |
| `-no-wrap`    | Don't wrap text               |
| `-shortcuts`  | Shortcut keys                 |

See: [Tables](./tables)

### Code

| Class        | Description                                 |
| ------------ | ------------------------------------------- |
| `-box-chars` | Less line height<br>_for box drawing chars_ |
| `-setup`     | Gray background                             |
| `-wrap`      | Enables line-wrapping                       |

See: [Code](#code-1)

### Paragraphs

| Class        | Description           |
| ------------ | --------------------- |
| `-setup`     | Gray background       |
| `-crosslink` | Has arrow on the link |

<!-- {.-gray} -->

See: [Paragraphs](#paragraphs-1)

### Lists

| Class          | Description        |
| -------------- | ------------------ |
| `-also-see`    | Lighter background |
| `-four-column` |                    |
| `-six-column`  |                    |

See: [Lists](#lists-1)

### Adding variants

<!-- {.-prime} -->

```
## Section
<!-- {.-two-column} -->
```

Devhints uses Kramdown, and supports adding classes via Kramdown's syntax.
