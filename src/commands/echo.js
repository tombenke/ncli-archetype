#!/usr/bin/env node
/*jshint node: true */
'use strict';

/**
 * 'echo' command implementation
 *
 * @arg {Object} container - Container context object, holds config data of the application and supporting functions.
 * @arg {Object} args - Command arguments object. Contains the name-value pairs of command arguments.
 *
 * @function
 */
exports.execute = (container, args) => {
//    const context = _.merge({}, container.config, args)
//    const projectBaseDir = path.resolve(context.sourceDir, context.projectName)
//    container.logger.info(`Generate the "${context.projectName}" REST-API project into "${projectBaseDir}"`)
    container.logger.info('Hello there, this is echo.execute!')
}
