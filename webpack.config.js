/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const config = (env, options) => {

  const config = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
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
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'python', 'typescript'].join('|')})$`),
      ),
      new CopyPlugin({
        patterns: [
          {from: './src/static'}
        ]
      })
    ],
    optimization: {
      minimize: options.mode === 'development' ? false : true,
      minimizer: [        
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ],
      splitChunks: {
        chunks: 'all',
        name: 'vendor'
      }
    }
  };
  if (options.mode === 'development')
    config.devtool = 'source-map';
  return config;
};

module.exports = config;