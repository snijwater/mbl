const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const mode = process.env.NODE_ENV;
console.log(process.env.NODE_ENV);
module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
      path: path.resolve('./dist/js/'),
      filename: '[name].min.js'
    },
    module: {
      rules: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        importLoaders: 1,
                        sourceMap: ((mode == 'dev') ? false : true), // Only use when in dev mode
                        minimize: ((mode !== 'dev') ? false : true) // Only use when in production mode
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                      ident: 'postcss',
                      sourceMap: ((mode == 'dev') ? false : true), // // Only use when in dev mode
                      plugins: (loader) => [
                        require('autoprefixer')({browsers: 'last 6 versions'})
                      ]
                    }
                },
                {
                    loader: 'sass-loader',
                    options : {
                      sourceMap: ((mode == 'dev') ? false : true), // // Only use when in dev mode
                      precision:10,
                    }
                }
              ]
          })
        }
      ]
    },
    plugins: ((mode == 'dev') ?
        [
          new ExtractTextPlugin('../css/main.min.css')
        ]
        :
        [
          new ExtractTextPlugin('../css/main.min.css'),
          new UglifyJsPlugin()
        ]
    )
  };
