## Web properties

Here are the pieces involved in Devhints:

### https://devhints.io/

- Purpose: Production website.
- Deployment: Deployed and built using Travis CI.
- CI: Tested via Travis CI.
- Source: [`rstacruz/cheatsheets`](https://github.com/rstacruz/cheatsheets) branch `master`.
- Hosting: GitHub pages on [`rstacruz/cheatsheets`](https://github.com/rstacruz/cheatsheets) branch `gh-pages`.

### https://assets.devhints.io/

- Website that stores share images.
- Source: [`rstacruz/cheatsheets-assets`](https://github.com/rstacruz/cheatsheets-assets) branch `master`.
- Hosting: GitHub pages on [`rstacruz/cheatsheets-assets`](https://github.com/rstacruz/cheatsheets-assets) branch `gh-pages`.

### https://devhints-engine.netlify.com

- Purpose: Testing site for the Node.js-based devhints-engine.
- CI: Tested via GitHub Actions. Also tested via GitLab CI, Azure Pipelines - but those are redundant.
- Deployment: Deployed and built using Netlify.
- Source: [`rstacruz/devhints-engine`](https://github.com/rstacruz/devhints-engine) branch `master`.
- Hosting: Netlify (`devhints-engine`) on Rico @rstacruz's account.

### https://next.devhints.io/

- Purpose: Testing site for the new website, based on Node.js-based devhints-engine.
- CI: ...
- Source: [`rstacruz/cheatsheets-ng`](https://github.com/rstacruz/cheatsheets-ng) branch `master`.
- Hosting: Netlify (`next-devhints-io`) on Rico @rstacruz's account.
