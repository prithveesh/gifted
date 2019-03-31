const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;
const isProduction = nodeEnv !== 'development';

// Common plugins
let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new CleanWebpackPlugin(),
];

if (!isProduction) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

const entry = {
  server: './server/index.js',
};

module.exports = {
  mode: 'development',
  devtool: false,
  externals: [nodeExternals()],
  name: 'server',
  plugins: plugins,
  target: 'node',
  entry: entry,
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.prod.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: [
      '.webpack-loader.js',
      '.web-loader.js',
      '.loader.js',
      '.js',
      '.jsx',
    ],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};

// module.exports = {
//   entry: {
//     server: './server/index.js',
//   },
//   output: {
//     path: path.join(__dirname, '../build/server'),
//     publicPath: '/',
//     filename: 'server.prod.js',
//   },
//   target: 'node',
//   node: {
//     // Need this when working with express, otherwise the build fails
//     __dirname: false, // if you don't put this is, __dirname
//     __filename: false, // and __filename return blank or /
//   },
//   mode: 'development',
//   externals: [nodeExternals()],
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin()],
//   stats: 'verbose',
// };

// const path = require('path');
// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// module.exports = {
//   entry: {
//     server: './server.js',
//   },
//   output: {
//     path: path.join(__dirname, 'dist'),
//     publicPath: '/',
//     filename: '[name].js',
//   },
//   target: 'node',
//   node: {
//     // Need this when working with express, otherwise the build fails
//     __dirname: false, // if you don't put this is, __dirname
//     __filename: false, // and __filename return blank or /
//   },
//   externals: [nodeExternals()], // Need this to avoid error when working with Express
//   module: {
//     rules: [
//       {
//         // Transpiles ES6-8 into ES5
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         // Loads the javacript into html template provided.
//         // Entry point is set below in HtmlWebPackPlugin in Plugins
//         test: /\.html$/,
//         use: [{ loader: 'html-loader' }],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './index.html',
//       filename: './index.html',
//       excludeChunks: ['server'],
//     }),
//   ],
// };
