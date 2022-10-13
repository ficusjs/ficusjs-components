const path = require('path')

module.exports = {
  webpackFinal: (config) => {
    config.node = { fs: 'empty' }

    config.performance = {
      hints: false,
      maxEntrypointSize: 1000000
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: /\.(esm|cjs).js$/,
      loader: 'babel-loader'
    })

    return config
  },
  stories: [
    '../stories/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    'storybook-theme-toggle'
  ],
  features: {
    postcss: false,
  }
}
