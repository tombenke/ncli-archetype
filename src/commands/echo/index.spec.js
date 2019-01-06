import npac from 'npac'
import { expect } from 'chai'
import defaults from '../../config'
import * as echo from './index'
import * as _ from 'lodash'
/*
import fs from 'fs'
import rimraf from 'rimraf'
import path from 'path'
import {
    loadJsonFileSync,
    mergeJsonFilesSync,
    listFilesSync,
    findFilesSync
} from 'datafile'
*/

describe('commands/echo', () => {

    /*
    const testDirectory = path.resolve('./tmp')
    const destCleanup = function(cb) {
        const dest = testDirectory
        rimraf(dest, cb)
    }

    beforeEach(function(done) {
        console.log('beforeEach', testDirectory)
        destCleanup(function() {
            fs.mkdirSync(testDirectory)
            done()
        })
    })

    afterEach(function(done) {
        console.log('afterEach')
        destCleanup(done)
    })
    */

    const echoContainer = {
        config: _.merge({}, defaults, { /* Add command specific config parameters */ })
    }
    const textToEcho = "Hello World!"
    const echoCommand = {
        name: 'echo',
        args: { text: textToEcho }
    }

    it('echo - execute', (done) => {
        const executives = { echo: echo.execute }

        npac.runJob(echoContainer.config, executives, echoCommand, (err, res) => {
        //npac.runJobSync(echoContainer.config, executives, echoCommand, (err, res) => {
            expect(err).to.equal(null)
            done()
        })
    })
})
