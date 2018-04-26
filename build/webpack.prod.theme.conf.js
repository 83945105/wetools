'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  entry: {
    ...function () {
      let entries = {};
      glob.sync(`./packages/theme-chalk/*.less`).forEach(f => {
        let name = f.match(new RegExp(`packages\/theme-chalk\/(\\S*).less`))[1];
        entries[`${name}`] = f;
      });
      return entries;
    }()
  },
  output: {
    path: path.resolve(__dirname, '../lib/theme-chalk'),
    filename: path.posix.join('', '[name].css'),
    publicPath: '/'
  },
  devtool: false,
  context: path.resolve(__dirname, '../'),
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  resolve: {
    extensions: ['.less'],
    alias: {
      '@': resolve('packages'),
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('', 'fonts/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|woff|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('', 'fonts/[name].[ext]')
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "less-loader"
            }
          ]
        })
      }
    ]
  }
};

module.exports = webpackConfig;
