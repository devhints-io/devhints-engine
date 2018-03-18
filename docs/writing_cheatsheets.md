# Writing cheatsheets

## Frontmatter

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

## Prism languages

For supported prism languages, see:
<https://github.com/PrismJS/prism/tree/gh-pages/components>

## CSS classes

See <https://devhints.io/cheatsheet-styles> for a reference on styling.
