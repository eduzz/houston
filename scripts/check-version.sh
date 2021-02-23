#!/bin/bash
set -exuo pipefail

LOCAL_VERSION=$(node -p -e "require('../package.json').version");
REMOTE_VERSION=$(npm view @eduzz/houston version);

if [ "${LOCAL_VERSION}" == "${REMOTE_VERSION}" ]
then
    echo "Package with v$LOCAL_VERSION already exists"
    exit 1;
else
    exit 0;
fi