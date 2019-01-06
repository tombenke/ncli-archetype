import { expect } from 'chai'
import defaults from './config'
import cli from './cli'

before(done => {
    done()
})

after(done => {
    done()
})

describe('cli', () => {

    it('echo', done => {
        const textToEcho = "Hello World!"
        const processArgv = ['node', 'src/index.js', 'echo', '-t', textToEcho];
        const expected = {
            command: {
                name: 'echo',
                type: 'async',
                args: { text: textToEcho }
            },
            cliConfig: {
                configFileName: "config.yml"
            }
        }

        expect(cli.parse(defaults, processArgv)).to.eql(expected)
        done()
    })
})
