#!/bin/bash
cd static/mypage
npm run build
cd ../..
cd static/hello-world
npm run build
cd ../..
forge tunnel

