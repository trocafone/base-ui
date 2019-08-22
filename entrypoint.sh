#!/bin/bash

echo "### Login to NPM ###"
npm-cli-login -u tech-trocafone -p $NPM_PASS -e opensource@trocafone.com


echo "### NPM User logged ###"
npm whoami

echo "### Yarn build ###"
yarn build

echo "### NPM Publishing ###"
npm publish --access-public
