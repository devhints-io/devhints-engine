```
╺┳┓   ┏━╸   ╻ ╻   ╻ ╻   ╻   ┏┓╻   ╺┳╸   ┏━┓       ╻   ┏━┓
 ┃┃   ┣╸    ┃┏┛   ┣━┫   ┃   ┃┗┫    ┃    ┗━┓       ┃   ┃ ┃
╺┻┛   ┗━╸   ┗┛    ╹ ╹   ╹   ╹ ╹    ╹    ┗━┛   ╹   ╹   ┗━┛
```

# Contributing

- CI: [GitHub actions](https://github.com/rstacruz/devhints-engine/actions)
- Deployment: [Netlify](https://app.netlify.com/sites/devhints-engine/settings/general) ([preview](http://devhints-engine.netlify.com/))

## Traditional dev setup

Clone the repo, install modules (<code>yarn</code>), then start it with <code>yarn develop</code>.

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

## Dev notes

<details>
<summary>
<strong>Dev setup via Docker</strong> <p>You can use docker-compose to get started faster and in a more reliable way.</p>
</summary>
<blockquote>

You can also run it via Docker. You only need to [install Docker](https://gist.github.com/rstacruz/297fc799f094f55d062b982f7dac9e41) and docker-compose).

```bash
# Clone the repo
git clone https://github.com/rstacruz/devhints-engine.git
cd devhints-engine

# Up
docker-compose up
```

Open <http://localhost:19336/> in your browser afterwards.

</blockquote></details>

<!-- ### Other dev commands -->

<details>
<summary><strong>Other dev commands</strong> <p><code>yarn test</code> will run tests, <code>yarn build</code> will build for production, and more.</p></summary><blockquote>

| Command                      | Description            |
| ---------------------------- | ---------------------- |
| `yarn test`                  | Run tests              |
| `yarn test --watch --notify` | Run tests continuously |
| `yarn build`                 | build for production   |

Prefix them with `docker-compose run --rm web` to run them inside the Docker container.

</blockquote></details>

<!-- ### Debug messages -->

<details>
<summary><strong>Debug messages</strong> <p>Use <code>localStorage.debug = 'app:*'</code> in your browser to print more debug messages.</p></summary><blockquote>

Run this in the JavaScript console:

```js
localStorage.debug = 'app:*'
```

</blockquote></details>

## For Devhints forkers

<details>
<summary><strong>Using devhints-engine</strong> <p>TODO.</p></summary><blockquote>

TODO: Write more about this here

</blockquote></details>

## Other docs

- [Writing cheatsheets](docs/writing_cheatsheets.md)
