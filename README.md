# A Quick Preview Into Promises (with Node.js)

## What's this?
This repo contains the code accompanied with [a quick presentation on promises](https://docs.google.com/presentation/d/13pgTDdmrjpiiyj2ezBPxHPHvWR3_CKNpIFHie_jgpa8/edit). The code here shows an example of using Promises to execute a series of commands in parallel and waiting for all those commands to finish before continuing with the program.

## Requirements to Run
* A fairly recent version of Node.js (tested on v7.6.0)

## How to Run
1. Download/clone the contents of the repo onto your system.
2. Open up a terminal window and have it point to this new directory.
3. Type in `npm install` to install the dependencies necessary
3. Run it with one of the commands below
    * `node readFileDemo.js -h` - Print list of possible commands
    * `node readFileDemo.js -c` - Run the callback test
    * `node readFileDemo.js -p` - Run the promise test