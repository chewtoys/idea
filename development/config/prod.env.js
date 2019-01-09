
module.exports = {

  assetsDir: 'assets',

  pages: {
    index: {
      entry: 'src/pages/index/index.js',
      template: 'src/pages/index/index.html',
      filename: 'index.hbs',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    post: {
      entry: 'src/pages/post/index.js',
      template: 'src/pages/post/index.html',
      filename: 'post.hbs',
      chunks: ['chunk-vendors', 'chunk-common', 'post']
    },
    tag: {
      entry: 'src/pages/tag/index.js',
      template: 'src/pages/tag/index.html',
      filename: 'tag.hbs',
      chunks: ['chunk-vendors', 'chunk-common', 'tag']
    },
    author: {
      entry: 'src/pages/author/index.js',
      template: 'src/pages/author/index.html',
      filename: 'author.hbs',
      chunks: ['chunk-vendors', 'chunk-common', 'author']
    },
    error: {
      entry: 'src/pages/error/index.js',
      template: 'src/pages/error/index.html',
      filename: 'error.hbs',
      chunks: ['chunk-vendors', 'chunk-common', 'error']
    },

  }

}