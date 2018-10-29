```
╺┳┓   ┏━╸   ╻ ╻   ╻ ╻   ╻   ┏┓╻   ╺┳╸   ┏━┓       ╻   ┏━┓
 ┃┃   ┣╸    ┃┏┛   ┣━┫   ┃   ┃┗┫    ┃    ┗━┓       ┃   ┃ ┃
╺┻┛   ┗━╸   ┗┛    ╹ ╹   ╹   ╹ ╹    ╹    ┗━┛   ╹   ╹   ┗━┛
```

# Contributing

- [GitLab CI](https://gitlab.com/rstacruz/devhints-engine/pipelines)
- [Netlify preview](http://devhints-engine-preview.netlify.com/)
- [Netlify admin](https://app.netlify.com/sites/devhints-engine-preview/settings/general)

## For developers

See: **[devhints-engine TODO list](https://github.com/rstacruz/devhints-engine/issues/10)** _(github.com)_.

## Dev setup (traditional)

This sets up a dev environment of `devhints-engine`. Note that you need Node 8+ and Yarn 1.5+.

```bash
# Clone the repo
git clone https://github.com/rstacruz/devhints-engine.git
cd devhints-engine

# First-time setup
yarn --force

# Start the server
yarn develop

# Open in the browser
open http://localhost:19336/
```

## Dev setup (via Docker)

You can also run it via Docker. You only need to [install Docker](https://gist.github.com/rstacruz/297fc799f094f55d062b982f7dac9e41) (with docker-compose).

```bash
alias dr='docker-compose run --rm --service-ports web'

# Clone the repo
git clone https://github.com/rstacruz/devhints-engine.git
cd devhints-engine

# First-time setup
dr yarn --force

# Start the server
docker-compose up
```

Open <http://localhost:19336/> in your browser afterwards.

### Other dev commands

| Command                      | Description            |
| ---------------------------- | ---------------------- |
| `yarn test`                  | Run tests              |
| `yarn test --watch --notify` | Run tests continuously |
| `yarn run build`             | build for production   |

Prefix them with `docker-compose run --rm --service-ports web` to run them inside the Docker container.

### Debug messages

Run this in the JavaScript console:

```js
localStorage.debug = 'app:*'
```

## For Devhints forkers

### Using devhints-engine

TODO

## Other docs

- [Writing cheatsheets](docs/writing_cheatsheets.md)
