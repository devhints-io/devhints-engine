```
     #                #        "             m                    "
  mmm#   mmm   m   m  # mm   mmm    m mm   mm#mm   mmm          mmm     mmm
 #" "#  #"  #  "m m"  #"  #    #    #"  #    #    #   "           #    #" "#
 #   #  #""""   #m#   #   #    #    #   #    #     """m           #    #   #
 "#m##  "#mm"    #    #   #  mm#mm  #   #    "mm  "mmm"    #    mm#mm  "#m#"
```

# Contributing

## Developer notes

### Quick start guide

This sets up a dev environment of `devhints-engine`:

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

## Using devhints-engine

Add it to your project:

```
yarn add github:rstacruz/devhints-engine#master
```

Configure `package.json`:

```json
{
  "scripts": {
    "develop": "devhints-engine develop"
  },
  "devhints": {
    "sheets": [
      "./*.md*"
    ]
  }
}
```

Now build using Yarn scripts.

## Other docs

- [Writing cheatsheets](docs/writing_cheatsheets.md)
