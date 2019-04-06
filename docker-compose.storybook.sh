#!/usr/bin/env sh
if [ ! -x ./node_modules/.bin/start-storybook ]; then
  echo "---"
  echo "Looks like this is the first time you're starting Storybook, since"
  echo "'node_modules' aren't found yet. Bring the 'web' service up first"
  echo "('docker-compose up [web]'), then try again after that succeeds."
  echo "---"
  exit 1
fi

# Yarn run
yarn run start-storybook \
  --ci \
  --host 0.0.0.0 \
  --port "${PORT:-4001}" \
  --config-dir ./src/storybook
