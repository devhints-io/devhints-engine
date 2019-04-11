default:
	@echo
	@echo "Makefile targets:"
	@grep -E '^[a-zA-Z_-].*?: .*?## .*$$' Makefile | sed 's#\\:#:#g' | awk 'BEGIN {FS = ": .*?## "}; {printf "\033[36m  %-20s\033[0m %s\n", $$1, $$2}'
	@echo

run ?= docker-compose run --rm web

yarn: ## Installs packages [alias: i]
	$(run) yarn

start: ## Starts the server [alias: s]
	$(run) yarn start

up: ## Starts the server as a daemon
	docker-compose up -d

down: ## Stops the server
	docker-compose down

bash: ## Runs a shell inside a Docker container [alias: sh]
	$(run) bash

tsc: ## Runs the TypeScript compiler
	$(run) yarn tsc

tsc\:watch: ## Runs the TypeScript compiler (watch mode) [alias: t]
	$(run) yarn tsc --watch

css_modules\:update: ## Update CSS modules [alias: c]
	$(run) yarn css_modules:update

# Aliases
i: yarn
s: start
sh: bash
c: css_modules\:update
t: tsc\:watch
