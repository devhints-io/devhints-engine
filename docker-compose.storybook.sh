#!/usr/bin/env sh
if [ ! -x ./node_modules/.bin/start-storybook ]; then
  echo "npm modules aren't installed yet."
  echo "try bringing up the web service first"
  exit 1
fi

# Yarn run
yarn run start-storybook \
  --ci \
  --host 0.0.0.0 \
  --port "${PORT:-4001}" \
  --config-dir ./src/storybook
