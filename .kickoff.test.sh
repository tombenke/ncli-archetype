#!/bin/bash
testBaseDir=${HOME}/tmp
destDir=${testBaseDir}/testcli
cwd=`pwd`
echo Executing kickoff -a .kickoff.test.yml -f . -d destDir
rm $destDir -rf
kickoff -a .kickoff.test.yml -f . -d $destDir
cd $destDir
./.kickoff.sh
npm install
npm run build
#npm run test
#npm run lint
cd $cwd
