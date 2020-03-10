// const path = require("path");
// const Dotenv = require("dotenv-webpack");
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists
const path = require('path'); // to get the current path
var SRC_DIR = path.join(__dirname, "/client/src/components/");
var DIST_DIR = path.join(__dirname, "/public/dist");


// module.exports = (env, argv) => {
//   const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : ".env";

//   return {
//     entry: `${SRC_DIR}/index.jsx`,
//     mode: "development",
//     output: {
//       filename: "bundle.js",
//       path: DIST_DIR
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(js|jsx)$/,
//           include: SRC_DIR,
//           exclude: /node_modules/,
//           use: ["babel-loader"]
//         },
//         {
//           test: /\.(scss)$/,
//           use: [
//             {
//               loader: "style-loader"
//             },
//             {
//               loader: "css-loader"
//             },
//             {
//               loader: "postcss-loader",
//               options: {
//                 plugins: function() {
//                   return [require("autoprefixer")];
//                 }
//               }
//             },
//             {
//               loader: "sass-loader"
//             }
//           ]
//         }
//       ]
//     },
//     resolve: {
//       extensions: ["*", ".js", ".jsx"]
//     },
//     plugins: [
//       new Dotenv({
//         path: envPath
//       })
//     ]
//     // plugins: [new webpack.DefinePlugin(envKeys)]
//   };
// };

module.exports = (env) => {
  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  
  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  
  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: `${SRC_DIR}/index.jsx`,
    mode: "development",
    output: {
      filename: "bundle.js",
      path: DIST_DIR
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [require("autoprefixer")];
                }
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [new webpack.DefinePlugin(envKeys)]
  };
}