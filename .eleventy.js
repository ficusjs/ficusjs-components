module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("componentPath", function (path) {
    return process.env.NODE_ENV === 'production' ? path : `http://localhost:8888${path}`
  })

  function getStylesheetTag (path) {
    return `<link rel="stylesheet" href="${process.env.NODE_ENV === 'production' ? path : `http://localhost:8888${path}`}">`
  }

  eleventyConfig.addShortcode("cssPath", function (path) {
    if (path && /,/.test(path)) {
      return path.split(',').map(p => getStylesheetTag(p)).join('')
    } else if (path && Array.isArray(path)) {
      return path.map(p => getStylesheetTag(p)).join('')
    } else if (path) {
      return getStylesheetTag(path)
    }
  })

  eleventyConfig.addShortcode("scriptPath", function (path) {
    if (path) {
      return `<script type="module" src="${process.env.NODE_ENV === 'production' ? path : `http://localhost:8888${path}`}"></script>`
    }
  })

  eleventyConfig.addShortcode("bootstrap", function (path) {
    if (path) {
      return `<script type="module">
        import { use } from 'https://unpkg.com/ficusjs?module'
        import { html, renderer } from 'https://unpkg.com/ficusjs-renderers@latest/dist/lit-html.js'
        import { module } from '${process.env.NODE_ENV === 'production' ? path : `http://localhost:8888${path}`}'

        use(module, { renderer, html })
      </script>`
    }
  })

  eleventyConfig.addPassthroughCopy([
    "src/img",
    "css"
  ])
}
