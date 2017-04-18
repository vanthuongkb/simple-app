npm install --global --production windows-build-tools 
set PATH=%USERPROFILE%\.windows-build-tools\python27;%PATH%
https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules

npm config set msvs_version 2015
npm i node-gyp -g
npm i node-ninja -g
