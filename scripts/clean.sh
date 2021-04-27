#!/bin/bash
set -e

BASEDIR="$( cd "$(dirname "$0")" ; pwd -P )"
 
git add $BASEDIR/../src/dev/src/components -f
git add .
git clean -f -x
git reset $BASEDIR/../src/dev/src/components