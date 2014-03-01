#!/usr/bin/env node
/*jshint node: true */
'use strict';

/**
 * command-line utility
 */
(function() {
    var verbose = false;
    var program = require('commander');
    var thisPackage = require(__dirname + '/../package.json');
    program._name = thisPackage.name;
    var app = require('../index');

    // Setup the commands of the program
    program
        .version(thisPackage.version)
        .command('cmd <param>')
        .description('Execute the "cmd" command with the "param" parameter')
        .option("-v, --verbose", "Verbose mode", Boolean, false)
        .action(function(param, options) {
                verbose = options.verbose;
                app.mycmd.execute({
                        param: param
                    }, verbose);
                });

    program.parse(process.argv);
})();