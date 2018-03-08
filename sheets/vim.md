---
path: "/vim"
title: "Vim"
category: Apps
intro: |
  [Vim](http://vim.org) is a text editor.
---

Getting started
---------------
<!-- {.-three-column} -->

### Exiting
<!-- {.-prime} -->

| Shortcut       | Description                      |
| ---            | ---                              |
| `:qa`          | Close all files                  |
| `:qa!`         | Close all files, abandon changes |
| ---            | ---                              |
| `:w`           | Save                             |
| `:wq` _/_ `:x` | Save and close file              |
| ---            | ---                              |
| `:q`           | Close file                       |
| `:q!`          | Close file, abandon changes      |
| ---            | ---                              |
| `ZZ`           | Save and quit                    |
| `ZQ`           | Quit without checking changes    |
<!-- {.-shortcuts} -->

### Navigating

| Shortcut            | Description       |
| ---                 | ---               |
| `h` `j` `k` `l`     | Arrow keys        |
| `<C-U>` _/_ `<C-D>` | Page up/page down |
<!-- {.-shortcuts} -->

#### Words

| Shortcut     | Description               |
| ---          | ---                       |
| `b` _/_ `w`  | Previous/next word        |
| `e` _/_ `ge` | Previous/next end of word |
<!-- {.-shortcuts} -->

#### Line

| Shortcut     | Description                        |
| ---          | ---                                |
| `0` _(zero)_ | Start of line                      |
| `^`          | Start of line _(after whitespace)_ |
| `$`          | End of line                        |
<!-- {.-shortcuts} -->

#### Document

| Shortcut | Description    |
| ---      | ---            |
| `gg`     | First line     |
| `G`      | Last line      |
| `:n`     | Go to line `n` |
| `nG`     | Go to line `n` |
<!-- {.-shortcuts} -->

### Editing

| Shortcut | Description                         |
| ---      | ---                                 |
| `a`      | Append                              |
| `i`      | Insert                              |
| `o`      | Next line                           |
| `O`      | Previous line                       |
| ---      | ---                                 |
| `s`      | Delete char and insert              |
| `S`      | Delete line and insert              |
| `C`      | Delete until end of line and insert |
| ---      | ---                                 |
| `r`      | Replace one character               |
| `R`      | Enter Replace mode                  |
<!-- {.-shortcuts} -->

### Exiting insert mode

| Shortcut          | Description                                 |
| ---               | ---                                         |
| `Esc` _/_ `<C-[>` | Exit insert mode                            |
| `<C-C>`           | Exit insert mode, and abort current command |
<!-- {.-shortcuts} -->

### Clipboard

| Shortcut | Description         |
| ---      | ---                 |
| `x`      | Delete character    |
| ---      | ---                 |
| `dd`     | Delete line _(Cut)_ |
| `yy`     | Yank line _(Copy)_  |
| ---      | ---                 |
| `p`      | Paste               |
| `P`      | Paste before        |
<!-- {.-shortcuts} -->

### Visual mode

| Shortcut | Description             |
| ---      | ---                     |
| `v`      | Enter visual mode       |
| `V`      | Enter visual line mode  |
| `<C-V>`  | Enter visual block mode |
<!-- {.-shortcuts} -->

#### In visual mode

| Shortcut    | Description             |
| ---         | ---                     |
| `d` _/_ `x` | Delete selection        |
| `s`         | Replace selection       |
| `y`         | Yank selection _(Copy)_ |
<!-- {.-shortcuts} -->

See [Operators](#operators) for other things you can do.

Operators
---------
<!-- {.-three-column} -->

### Usage
<!-- {.-prime} -->

Operators let you operate in a range of text (defined by *motion*). These are preformed in normal mode.
<!-- {.-setup} -->

SNIP

Also see
--------

- [Vim cheatsheet](https://vim.rtorr.com/) _(vim.rotrr.com)_
- [Vim documentation](http://vimdoc.sourceforge.net/htmldoc/) _(vimdoc.sourceforge.net)_
- [Interactive Vim tutorial](http://openvim.com/) _(openvim.com)_
