#!/usr/bin/env sh

# Yarn run
yarn run start-storybook \
  --ci \
  --host 0.0.0.0 \
  --port "${PORT:-4001}" \
  --config-dir ./src/storybook
