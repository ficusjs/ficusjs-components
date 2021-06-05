const glob = require('glob-all')
const logSymbols = require('log-symbols')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const build = require('./lib/build.cjs')

const argv = yargs(hideBin(process.argv)).argv

const outputDir = argv.outputDir || 'build'

const components = glob.sync(['src/components/custom-elements/*/index.js', 'src/components/loader'])
const buildPromises = components.map(c => {
  return build(c, c.replace('src', outputDir))
})

Promise.all(buildPromises)
  .then(() => console.log(logSymbols.success, `${buildPromises.length} components successfully built!`))
