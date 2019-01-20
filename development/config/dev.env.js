
module.exports = {

  assetsDir: 'assets',

  pages: {
    index: {
      entry: 'src/pages/index/index.js',
      template: 'src/pages/index/index.dev.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    post: {
      entry: 'src/pages/post/index.js',
      template: 'src/pages/post/index.dev.html',
      filename: 'post.html',
      chunks: ['chunk-vendors', 'chunk-common', 'post']
    },
    tag: {
      entry: 'src/pages/tag/index.js',
      template: 'src/pages/tag/index.dev.html',
      filename: 'tag.html',
      chunks: ['chunk-vendors', 'chunk-common', 'tag']
    },
    author: {
      entry: 'src/pages/author/index.js',
      template: 'src/pages/author/index.dev.html',
      filename: 'author.html',
      chunks: ['chunk-vendors', 'chunk-common', 'author']
    },
    error: {
      entry: 'src/pages/error/index.js',
      template: 'src/pages/error/index.dev.html',
      filename: 'error.html',
      chunks: ['chunk-vendors', 'chunk-common', 'error']
    },

  }
  
}