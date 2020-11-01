module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("componentPath", function (path) {
    return process.env.NODE_ENV === 'production' ? path : `http://localhost:8888${path}`
  })

  eleventyConfig.addShortcode("cssPath", function (path) {
    if (path) {
      return `<link rel="stylesheet" href="${process.env.NODE_ENV === 'production' ? path : `http://localhost:8888${path}`}">`
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
}
