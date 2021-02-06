const glob = require('glob-all')
const logSymbols = require('log-symbols')
const { writeFileSync } = require('fs')
const path = require('path')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const sass = require('sass')
const CleanCSS = require('clean-css')
const mkdirp = require('mkdirp')

const argv = yargs(hideBin(process.argv)).argv

const outputDir = argv.outputDir || 'build'
const options = {}

const cssFiles = glob.sync(['src/components/**/*.scss'])
const buildPromises = cssFiles.map(c => {
  return new Promise((resolve, reject) => {
    let outputPath = c.replace('src', outputDir)
    outputPath = outputPath.replace('.scss', '.css')
    try {
      const result = sass.renderSync({ file: c })
      const output = new CleanCSS(options).minify(result.css)
      mkdirp.sync(path.dirname(outputPath))
      writeFileSync(outputPath, output.styles, { encoding: 'utf-8' })
      resolve()
    } catch (e) {
      reject(e)
    }
  })
})

Promise.all(buildPromises)
  .then(() => console.log(logSymbols.success, `${buildPromises.length} css successfully built!`))
