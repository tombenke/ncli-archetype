#!/bin/bash
testBaseDir=${HOME}/tmp
destDir=${testBaseDir}/testcli
cwd=`pwd`
echo Executing kickoff -a .kickoff.test.yml -f . -d destDir
rm $destDir -rf
kickoff -a .kickoff.test.yml -f . -d $destDir
cd $destDir
sh ./.kickoff.sh
npm install
npm run build
npm run lint
npm run test
cd $cwd
