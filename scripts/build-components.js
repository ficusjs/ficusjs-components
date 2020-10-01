const glob = require('glob-all')
const logSymbols = require('log-symbols')
const build = require('./lib/build')

const components = glob.sync(['src/components/*/index.js'])
const buildPromises = components.map(c => {
  return build(c, c.replace('src', 'dist'))
})

Promise.all(buildPromises)
  .then(() => console.log(logSymbols.success, `${buildPromises.length} components successfully built!`))
