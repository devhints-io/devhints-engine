```
     #                #        "             m                    "
  mmm#   mmm   m   m  # mm   mmm    m mm   mm#mm   mmm          mmm     mmm
 #" "#  #"  #  "m m"  #"  #    #    #"  #    #    #   "           #    #" "#
 #   #  #""""   #m#   #   #    #    #   #    #     """m           #    #   #
 "#m##  "#mm"    #    #   #  mm#mm  #   #    "mm  "mmm"    #    mm#mm  "#m#"
```

# Contributing

<!-- TOC depthFrom:1 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Contributing](#contributing)
  - [For developers](#for-developers)
    - [Quick-start guide](#quick-start-guide)
    - [Via Docker](#via-docker)
    - [Other dev commands](#other-dev-commands)
  - [For Devhints forkers](#for-devhints-forkers)
    - [Using devhints-engine](#using-devhints-engine)
  - [Other docs](#other-docs)

<!-- /TOC -->

## For developers

See: **[devhints-engine TODO list](https://github.com/rstacruz/devhints-engine/issues/10)** _(github.com)_.

### Quick-start guide

This sets up a dev environment of `devhints-engine`. Note that you need Node 8+ and Yarn 1.5+.

```bash
# Clone the repo
git clone https://github.com/rstacruz/devhints-engine.git
cd devhints-engine

# Install dependencies
yarn

# Run the server
yarn develop

# Open in the browser
open http://localhost:8000/
```

### Via Docker

You can also run it via Docker. This is preferred for Windows machines. You only need to [install Docker](https://gist.github.com/rstacruz/297fc799f094f55d062b982f7dac9e41).

```bash
# Clone the repo
git clone https://github.com/rstacruz/devhints-engine.git
cd devhints-engine

# First-time setup
docker-compose run --rm web yarn

# Start the server
docker-compose up
```

Open <http://localhost:8000/> in your browser afterwards.

### Other dev commands

- `docker-compose up` will turn on the Docker container.
- `docker-compose run --rm web <COMMAND>` runs something in a Docker container.

| Command                      | Description            |
| ---------------------------- | ---------------------- |
| `yarn test`                  | Run tests              |
| `yarn test --watch --notify` | Run tests continuously |
| `yarn run build`             | build for production   |

## For Devhints forkers

### Using devhints-engine

TODO

## Other docs

* [Writing cheatsheets](docs/writing_cheatsheets.md)
