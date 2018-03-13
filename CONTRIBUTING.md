```
     _            _     _       _         _
  __| | _____   _| |__ (_)_ __ | |_ ___  (_) ___
 / _` |/ _ \ \ / / '_ \| | '_ \| __/ __| | |/ _ \
| (_| |  __/\ V /| | | | | | | | |_\__ \_| | (_) |
 \__,_|\___| \_/ |_| |_|_|_| |_|\__|___(_)_|\___/
```

# Developer notes

> Some notes for developers

## Setup notes

Quick start guide:

``` bash
yarn               # install dependencies
yarn run develop   # starts a server
```

Other commands available:

| Command                      | Description            |
| ---                          | ---                    |
| `yarn test`                  | Run tests              |
| `yarn test --watch --notify` | Run tests continuously |
| `yarn run build`             | build for production   |
| `yarn run deploy`            | deploy to gh-pages     |

## Files of interest

Some files to start digging into:

#### Pages

- [`HomePage`](src/pages/index.js)
- [`NotFoundPage`](src/pages/404.js)
- [`CheatsheetTemplate`](src/templates/SheetTemplate.js)

#### React

- [`PostContent`](src/components/PostContent.js)

#### CSS

- [`index.css`](src/styles/index.css) (Main entry point)
- [`variables.css`](src/styles/variables.css)

#### Config

- [`CONFIG`](config.js) (site content, secrets, etc)

#### Boilerplate

- [`TemplateWrapper`](src/layouts/index.js) (Basic `<html>` template)

#### Notable cheatsheets

- [`vim.md`](sheets/vim.md)
- [`sketch.md`](sheets/sketch.md)
