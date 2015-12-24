#!/bin/bash -e

if [ -z "$NODE_ENV" ]; then
  export NODE_ENV=development
fi

cd $DOCUMENT_ROOT
npm install
pm2 start -x $INDEX_FILE --name="app" --no-daemon --watch
