#!/usr/bin/env node

// const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const dir = process.cwd() + '/blocks'
const index = process.cwd() + '/.blocks/index.js'

const startWatch = () => {
    fs.watch(dir, (evt, filename) => {
        console.log(filename, evt)
        writeIndex()
    })
}

const writeIndex = () => {
    fs.readdir(dir, (err, files) => {
        if (err) { return }

        const filesToWrite = files
        .filter(filename => path.extname(filename) === '.svelte')

        const stream = fs.createWriteStream(index)
        stream.write('// This file was generated using blocks.js\n')
        filesToWrite.forEach(file => {
            console.log('File', file)
            const modulename = path.basename(file, '.svelte')
            stream.write(`import ${modulename} from '../blocks/${file}'\n`)
        })
        stream.write(`export default [${filesToWrite.map(f => path.basename(f, '.svelte')).join(',')}]`)
        stream.close()
    })
}

// Write once on start-up
writeIndex()

startWatch()
// exec('svite', { cwd: __dirname })
console.log('Started blocks watch')