ncli-archetype
===========

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)
[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coveralls][BadgeCoveralls]][Coveralls]

## About

Project archetype for Command Line tools using Node.js

It provides only one simple command, that is: `echo`, that echoes back it s only one parameter:

```bash
    ncli-archetype echo -t Hi
```

## Installation

Run the install command:

    npm install -g ncli-archetype

Check if ncli-archetype is properly installed:

    $ ncli-archetype --help


## Get Help

To learn more about the tool visit the [homepage](http://tombenke.github.io/ncli-archetype/).


## Generate new CLI tool from this archetype

This project can be used to generate a new CLI project too,
using the [kickoff](https://github.com/tombenke/kickoff) utility.

In order to generate a new CLI project, do the following:

1. Install the [kickoff](https://github.com/tombenke/kickoff) utility, if you have not installed yet:

```bash
    npm install -g kickoff
```

2. Create a new CLI project:

```bash
    kickoff -s tombenke/ncli-archetype -d new-cli-app
```

3. Finish the configuration of the new project, test and build it:

```bash
    cd new-cli-app
    sh ./.kickoff.sh
    npm install
    npm run test
    npm run build
```

4. Check if it works properly:

```bash
    node dist/app.js echo --text Hi
```

You should see something like this:
```bash
    info: echo.execute => Hi
```

5. Now the project is ready, so you can extend it, according to your needs.


## References

- [npac](http://tombenke.github.io/npac).
- [npac-example-cli](http://tombenke.github.io/npac-example-cli).

[npm-badge]: https://badge.fury.io/js/ncli-archetype.svg
[npm-url]: https://badge.fury.io/js/ncli-archetype
[travis-badge]: https://api.travis-ci.org/tombenke/ncli-archetype.svg
[travis-url]: https://travis-ci.org/tombenke/ncli-archetype
[Coveralls]: https://coveralls.io/github/tombenke/ncli-archetype?branch=master
[BadgeCoveralls]: https://coveralls.io/repos/github/tombenke/ncli-archetype/badge.svg?branch=master
