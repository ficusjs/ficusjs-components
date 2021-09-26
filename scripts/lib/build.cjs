const join = require('path').join
const rollup = require('rollup')
const minifyHTML = require('rollup-plugin-minify-html-literals').default
const replace = require('@rollup/plugin-replace')
const resolve = require('@rollup/plugin-node-resolve').default
const terser = require('rollup-plugin-terser').terser

module.exports = async function (entry, outputDir) {
  const entryPath = join(process.cwd(), entry)
  const outputPath = join(process.cwd(), outputDir)

  const inputOptions = {
    input: entryPath,
    plugins: [
      resolve(),
      minifyHTML(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      terser({ mangle: { keep_fnames: true, toplevel: true, module: true } })
    ],
    external: id => /https?:\/\//.test(id),
    preserveEntrySignatures: 'strict'
  }

  const outputOptions = {
    format: 'es'
  }

  if (outputPath.endsWith('.mjs')) {
    outputOptions.file = outputPath
  } else {
    outputOptions.dir = outputPath
  }

  // create a bundle
  const bundle = await rollup.rollup(inputOptions)

  // write the bundle to disk
  await bundle.write(outputOptions)

  console.log('Build completed!', outputPath)
}
