/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = () => {

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      index: '',
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
      historyApiFallback: true,
      proxy: {
        context: () => true,
        target: 'http://localhost:3001'
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: ''
              }
            }, 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [new MiniCssExtractPlugin()],
  };
};

module.exports = config;