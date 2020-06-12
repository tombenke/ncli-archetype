import fs from 'fs'
import rimraf from 'rimraf'
import path from 'path'
import { expect } from 'chai'
/*
import {
    loadJsonFileSync,
    findFilesSync
} from 'datafile'
*/

import { start } from './index'

const testDirectory = path.resolve('./tmp')

const destCleanup = function (cb) {
    const dest = testDirectory
    rimraf(dest, cb)
}

describe('app', () => {
    before(function (done) {
        destCleanup(function () {
            fs.mkdirSync(testDirectory)
            done()
        })
    })

    after(function (done) {
        destCleanup(done)
    })

    /*
    it('#start - with no arguments', (done) => {

        const processArgvEmpty = [
            'node', 'src/index.js'
        ]

        try {
            start(processArgvEmpty)
        } catch (err) {
            expect(err.message).to.equal('Must use a command!')
            done()
        }
    })
*/
    it('#start - echo command', (done) => {
        const processArgvToEcho = ['node', 'src/index.js', 'echo', '--text', 'Hello world!']

        start(processArgvToEcho, (err, res) => {
            expect(err).to.equal(null)
            done()
        })
    })
})
