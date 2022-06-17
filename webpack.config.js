const path = require('path');

const srcPath = path.join(__dirname, '..', 'publicfolder')

const rules = []

const includePaths = [
  srcPath
]
    // handle images
    rules.push({
      test: /\.(png|gif|jpe?g|svg|ico)$/,
      include: includePaths,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name]-[hash].[ext]'
        }
      }