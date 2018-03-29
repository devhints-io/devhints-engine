---
path: /ranger
title: Ranger
category: CLI
---

## Basics

<!-- {.-three-column} -->

### Navigating

| Description       | Key             |
| ----------------- | --------------- |
| Left/right        | `h` _/_ `l`     |
| Back/forward      | `H` _/_ `L`     |
| ---               | ---             |
| Up/down           | `j` _/_ `k`     |
| Page up/down      | `J` _/_ `K`     |
| Up-down on parent | `[` _/_ `]`     |
| ---               | ---             |
| Page up/down      | `C-U` _/_ `C-D` |

<!-- {.-shortcuts-right} -->

### Basic actions

| Description    | Key     |
| -------------- | ------- |
| Open in editor | `ENTER` |
| Shell          | `S`     |
| Quit           | `Q`     |
| ---            | ---     |
| Help...        | `?`     |
| Change view... | `M`     |
| Change sort... | `o`     |

<!-- {.-shortcuts-right} -->

### Help `?`

| Description  | Key  |
| ------------ | ---- |
| Key bindings | `?k` |
| Man page     | `?m` |

<!-- {.-shortcuts-right} -->

### View `M`

```
(n)name m(t)ime (s)ize
```

<!-- {.-setup} -->

| Description | Key  |
| ----------- | ---- |
| Default     | `Mt` |
| Show size   | `Ms` |

<!-- {.-shortcuts-right} -->

### Sort `o`

| Description     | Key           |
| --------------- | ------------- |
| _Sort by_ name  | `on` _/_ `oN` |
| _Sort by_ size  | `os` _/_ `oS` |
| _Sort by_ mtime | `om` _/_ `oM` |

<!-- {.-shortcuts-right} -->

## Operations

<!-- {.-three-column} -->

### Basic operations

| Description  | Key   |
| ------------ | ----- |
| Yank (copy)  | `y`   |
| Delete (cut) | `d`   |
| Paste        | `p`   |
| ---          | ---   |
| Mark file    | `SPC` |

<!-- {.-shortcuts-right} -->

These work just like vim.

### Copy

| Description   | Key  |
| ------------- | ---- |
| **Yank this** | `yy` |

<!-- {.-shortcuts-right} -->

### Cut

| Description   | Key  |
| ------------- | ---- |
| **Cut this**  | `dd` |
| ---           | ---  |
| Really delete | `dD` |
| Delete toggle | `dt` |

<!-- {.-shortcuts-right} -->

### Paste

| Description                 | Key  |
| --------------------------- | ---- |
| **Paste here**              | `pp` |
| ---                         | ---  |
| Paste _append_              | `pP` |
| Paste _override_            | `po` |
| Paste _append & override_   | `pO` |
| ---                         | ---  |
| Paste as _absolute symlink_ | `pl` |
| Paste as _relative symlink_ | `pL` |

<!-- {.-shortcuts.-right} -->

## Other features

<!-- {.-three-column} -->

### Go to

| Description  | Key  |
| ------------ | ---- |
| Go to `/`    | `g/` |
| Go to `/usr` | `gu` |
| Go to `/var` | `gv` |

<!-- {.-shortcuts} -->
