#!/bin/bash

echo "### Login to NPM services ###"
npm-cli-login -u $NPM_USER -p $NPM_PASS -e $NPM_EMAIL


echo "### NPM User logged ###"
npm whoami

echo "### Yarn build ###"
yarn build

echo "### NPM Publishing ###"
npm publish --access-public
