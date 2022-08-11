#!/bin/bash
rm main/networks/list.js
rm module/networks/list.js
touch main/networks/list.js
touch module/networks.list.js
echo 'module.exports =' > main/networks/list.js
echo 'export default' > module/networks/list.js
cat list.json | tee -a main/networks/list.js  module/networks/list.js > /dev/null