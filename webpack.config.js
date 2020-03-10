const path = require('path');
const fs = require('fs');
const Dotenv = require('dotenv-webpack');
var SRC_DIR = path.join(__dirname, '/client/src/components/');
var DIST_DIR = path.join(__dirname, '/public/dist');


module.exports = (env, argv) => {
  const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : '.env';
  
  
  return  {
    entry: `${SRC_DIR}/index.jsx`,
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(scss)$/,
          use: [{ 
            loader: 'style-loader' 
          }, { 
            loader: 'css-loader' 
          }, { 
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
          }, { 
            loader: 'sass-loader' 
          }]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    plugins: [
      new Dotenv({
        path: envPath
      })
    ]
  };
}


