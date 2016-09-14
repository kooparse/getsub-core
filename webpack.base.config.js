import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'

export default {
  entry: {
    'getsub-core': './src'
  },
  output: {
    path: 'lib',
    library: 'getsub-core',
    libraryTarget: 'umd',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0'],
          plugins: [
            'transform-class-properties',
            ['transform-runtime', {
              polyfill: false,
              regenerator: true
            }]
          ]
        }
      }
    ],
  },
  plugins: []
}
