#!/bin/bash
set -e

BASEDIR="$( cd "$(dirname "$0")" ; pwd -P )"
 
if [ -d "$BASEDIR/../src/dev/src/components" ]; then
  git add $BASEDIR/../src/dev/src/components -f
fi

git add .
git clean -f -x

if [ -d "$BASEDIR/../src/dev/src/components" ]; then
  git reset $BASEDIR/../src/dev/src/components
fi

rm -rf $BASEDIR/../src/.docz