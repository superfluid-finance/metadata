#!/bin/bash

touch main/networks/list.js
touch module/networks.list.js
echo 'export default' | tee main/networks/list.js module/networks/list.js > /dev/null
cat list.json | tee -a main/networks/list.js  module/networks/list.js > /dev/null