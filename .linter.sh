#!/bin/bash
cd /tmp/kavia/workspace/code-generation/quickcalc-7119-fc470c40/quickcalc
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

