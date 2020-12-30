const glob = require('glob-all')
const logSymbols = require('log-symbols')
const { readFileSync, writeFileSync } = require('fs')
const path = require('path')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const CleanCSS = require('clean-css')
const mkdirp = require('mkdirp')

const argv = yargs(hideBin(process.argv)).argv

const outputDir = argv.outputDir || 'build'
const options = {}

const cssFiles = glob.sync(['src/components/**/*.css'])
const buildPromises = cssFiles.map(c => {
  const input = readFileSync(c, { encoding: 'utf-8' })
  return new Promise((resolve, reject) => {
    const outputPath = c.replace('src', outputDir)
    const output = new CleanCSS(options).minify(input)
    mkdirp.sync(path.dirname(outputPath))
    writeFileSync(outputPath, output.styles, { encoding: 'utf-8' })
  })
})

Promise.all(buildPromises)
  .then(() => console.log(logSymbols.success, `${buildPromises.length} css successfully built!`))
