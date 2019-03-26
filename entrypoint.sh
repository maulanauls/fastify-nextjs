#!/bin/sh

if [[ ! -d "/usr/app/node_modules" ]]; then
  # Control will enter here if /usr/src/app/src/node_modules doesn't already exist.
  cp -r /usr/cache/node_modules /usr/app/node_modules
fi

yarn start:dev