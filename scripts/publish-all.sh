#!/bin/bash
set -e

BASEDIR="$( cd "$(dirname "$0")" ; pwd -P )"

NPM_AUTH_TOKEN=$NPM_AUTH_TOKEN node $BASEDIR/publish-all.js $1