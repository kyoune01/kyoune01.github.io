#!bin/bash

# config git
chmod 777 /app/.git
git config include.path "/app/.gitconfig.local"

# setup yarn
yarn install