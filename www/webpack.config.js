const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
}
