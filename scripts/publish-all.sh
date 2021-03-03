#!/bin/bash
set -e

BASEDIR="$( cd "$(dirname "$0")" ; pwd -P )"

node $BASEDIR/publish-all.js $1