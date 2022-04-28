#!/bin/bash

set -e

echo "-> Starting $TROCA_APP_NAME ... "
#
echo "### Introducing parameters on NPM & Yarn Files ###"
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
echo "always-auth=true" >> ~/.npmrc
echo "registry \"https://registry.npmjs.org/\"" > ~/.yarnrc
echo "### Done ###"

echo "### Yarn build ###"
yarn build
echo "### Done ###"

echo "### NPM Publishing ###"
npm publish --access-public
echo "### Done ###"