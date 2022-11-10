#!/bin/sh

# What is our CPU + packages
npm run next:info

# Make the large files zero bytes for the `musl` SWC
echo "What is the state of @swc/core modules in node_modules/@swc/core-linux-x64-*"
DISK_USAGE_SWC_CORE=`du -h node_modules/@swc/core-linux-x64-*`
echo "${DISK_USAGE_SWC_CORE}"
echo "Here's the tree"
TREE_SWC_CORE=`tree nodule_modules/@swc`
echo "${TREE_SWC_CORE}"
