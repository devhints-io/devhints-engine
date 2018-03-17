```
     #                #        "             m                    "
  mmm#   mmm   m   m  # mm   mmm    m mm   mm#mm   mmm          mmm     mmm
 #" "#  #"  #  "m m"  #"  #    #    #"  #    #    #   "           #    #" "#
 #   #  #""""   #m#   #   #    #    #   #    #     """m           #    #   #
 "#m##  "#mm"    #    #   #  mm#mm  #   #    "mm  "mmm"    #    mm#mm  "#m#"
```

# Developer notes

## Table of Contents

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
- [Developer notes](#developer-notes)
    - [Table of Contents](#table-of-contents)
    - [Setup notes](#setup-notes)
        - [Quick start guide](#quick-start-guide)
        - [Other commands](#other-commands)
    - [Files of interest](#files-of-interest)
        - [Pages](#pages)
        - [React](#react)
        - [CSS](#css)
        - [Config](#config)
        - [Boilerplate](#boilerplate)
        - [Notable cheatsheets](#notable-cheatsheets)
    - [Writing cheatsheets](#writing-cheatsheets)
        - [Frontmatter](#frontmatter)
        - [Prism languages](#prism-languages)
        - [CSS classes](#css-classes)

<!-- markdown-toc end -->

## Setup notes

### Quick start guide

~~~ bash
yarn               # install dependencies
yarn run develop   # starts a server
~~~

### Other commands

| Command                      | Description                   |
| ---                          | ---                           |
| `yarn test`                  | Run tests                     |
| `yarn test --watch --notify` | Run tests continuously        |
| `yarn run build`             | build for production          |
| `yarn run deploy`            | deploy to gh-pages            |
| `yarn run fix`               | fix lint errors automatically |

## Files of interest

Some files to start digging into:

### Pages

- [`HomePage`](src/pages/index.js)
- [`NotFoundPage`](src/pages/404.js)
- [`CheatsheetTemplate`](src/templates/SheetTemplate.js)

### React

- [`PostContent`](src/components/PostContent.js)

### CSS

- [`index.css`](src/styles/index.css) (Main entry point)
- [`variables.css`](src/styles/variables.css)

### Config

- [`CONFIG`](config.js) (site content, secrets, etc)

### Boilerplate

- [`TemplateWrapper`](src/layouts/index.js) (Basic `<html>` template)

### Notable cheatsheets

- [`vim.md`](sheets/vim.md)
- [`sketch.md`](sheets/sketch.md)

## Writing cheatsheets

### Frontmatter

Each sheet supports these metadata:

~~~ yml
---
title: React.js
layout: 2017/sheet   # 'default' | '2017/sheet'

# Optional:
category: React
updated: 2017-08-30       # To show in the updated list
ads: false                # Add this to disable ads
weight: -5                # lower number = higher in related posts list
deprecated: true          # Don't show in related posts
deprecated_by: /enzyme    # Point to latest version
prism_languages: [vim]    # Extra syntax highlighting
intro: |
  This is some *Markdown* at the beginning of the article.
tags:
  - WIP
  - Featured
---
~~~

### Prism languages

For supported prism languages, see:
<https://github.com/PrismJS/prism/tree/gh-pages/components>

### CSS classes

See <https://devhints.io/cheatsheet-styles> for a reference on styling.
