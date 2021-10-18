#!/bin/bash
set -e

BASEDIR="$( cd "$(dirname "$0")" ; pwd -P )"

yarn husky install
yarn patch-package
rm -rf $BASEDIR/../src/node_modules/@eduzz