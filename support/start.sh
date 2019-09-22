#!/usr/bin/env sh
# This script will be ran when you do `docker-compose up`.
#
# This entrypoint saves you from the hassle of doing setup (installing npm
# modules, etc) - it will be done for you. All you need to do is
# 'docker-compose up' :)

# Yarn install as needed
if [ ! -x ./node_modules/.bin/gatsby ]; then
  yarn
fi

# Clear cache as needed
if [ -d .cache ]; then
  rm -rf .cache/*
fi

# Yarn run
yarn run gatsby develop --host 0.0.0.0 --port "${PORT:-19336}"
