const markdownIt = require('markdown-it')
const slugify = require("slugify")
const pluginTOC = require('eleventy-plugin-toc')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const CleanCSS = require("clean-css")
const { minify } = require("html-minifier")

module.exports = function (eleventyConfig) {
  if (process.env.NODE_ENV === 'production') {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      // Eleventy 1.0+: use this.inputPath and this.outputPath instead
      if (outputPath.endsWith(".html")) {
        let minified = minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        })
        return minified
      }
      return content
    })
  }

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addShortcode("componentPath", function (path) {
    return path
    // return process.env.NODE_ENV === 'production' ? path : `http://localhost:8080${path}`
  })

  function getStylesheetTag (path) {
    return `<link rel="stylesheet" href="${path}">`
    return `<!--<link rel="stylesheet" href="${process.env.NODE_ENV === 'production' ? path : `http://localhost:8889${path}`}">-->`
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
    if (path && path != '') {
      return `<script type="module" src="${process.env.NODE_ENV === 'production' ? path : `http://localhost:8080${path}`}"></script>`
    } else {
      return ''
    }
  })

  eleventyConfig.addShortcode("serviceWorker", function () {
    if (process.env.NODE_ENV === 'production') {
      return `<script>window.onload=function(){"serviceWorker"in navigator&&navigator.serviceWorker.register('/sw.js')};</script>`
    }
    return ''
  })

  eleventyConfig.addShortcode("bootstrap", function (path) {
    if (!path || path.trim() === '') return ''
    if (path && /,/.test(path)) {
      const paths = path.split(',')
      const importStatements = paths.map((p, i) => `import { module as module${i} } from '${process.env.NODE_ENV === 'production' ? p : `http://localhost:8080${p}`}'`).join('\n')
      const useStatements = paths.map((p, i) => `use(module${i}, { renderer, html })`).join('\n')
      return `<script type="module">
        import { use } from 'https://cdn.skypack.dev/ficusjs@3'
        import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/uhtml'
        ${importStatements}
        ${useStatements}
      </script>`
    } else if (path && Array.isArray(path)) {
      const importStatements = path.map((p, i) => `import { module as module${i} } from '${process.env.NODE_ENV === 'production' ? path : `http://localhost:8080${p}`}'`).join('\n')
      const useStatements = path.map((p, i) => `use(module${i}, { renderer, html })`).join('\n')
      return `<script type="module">
        import { use } from 'https://cdn.skypack.dev/ficusjs@3'
        import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/uhtml'
        ${importStatements}
        ${useStatements}
      </script>`
    } else if (path) {
      return `<script type="module">
        import { use } from 'https://cdn.skypack.dev/ficusjs@3'
        import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@4/uhtml'
        import { module } from '${process.env.NODE_ENV === 'production' ? path : `http://localhost:8080${path}`}'
        use(module, { renderer, html })
      </script>`
    } else {
      return ''
    }
  })

  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/ficus-components.webmanifest");

  if (process.env.NODE_ENV !== 'production') {
    eleventyConfig.addPassthroughCopy("./src/components");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js/")
    eleventyConfig.addWatchTarget("./src/components/")
    eleventyConfig.addWatchTarget("./src/assets/")
  }

  eleventyConfig.addPlugin(syntaxHighlight)

  /* Markdown */
  let markdownItAnchor = require("markdown-it-anchor")
  let markdownItToc = require("markdown-it-table-of-contents")
  let markdownItEmoji = require('markdown-it-emoji')

  function removeExtraText(s) {
    let newStr = String(s).replace(/New\ in\ v\d+\.\d+\.\d+/, "")
    newStr = newStr.replace(/Coming\ soon\ in\ v\d+\.\d+\.\d+/, "")
    newStr = newStr.replace(/⚠️/g, "")
    newStr = newStr.replace(/[?!]/g, "")
    newStr = newStr.replace(/<[^>]*>/g, "")
    return newStr;
  }

  function markdownItSlugify(s) {
    return slugify(removeExtraText(s), { lower: true, remove: /[:’'`,]/g })
  }

  let mdIt = markdownIt({
    html: true,
    breaks: true
  })
  .use(markdownItAnchor, {
    permalink: true,
    slugify: markdownItSlugify,
    permalinkBefore: false,
    permalinkClass: "fd-direct-link",
    permalinkSymbol: "#",
    level: [1,2,3,4]
  })
  .use(markdownItToc, {
    includeLevel: [2, 3],
    slugify: markdownItSlugify,
    format: function(heading) {
      return removeExtraText(heading)
    },
    transformLink: function(link) {
      // remove backticks from markdown code
      return link.replace(/\%60/g, "")
    }
  })
  .use(markdownItEmoji);

  eleventyConfig.setLibrary("md", mdIt)

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    wrapper: 'nav',
    wrapperClass: 'fd-toc__nav',
    ul: true
  })
}
