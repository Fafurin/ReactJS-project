const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
      rules: [
          {
              exclude: /node_modules/,
              test: /\.(j|t)sx?$/,
              use: ['babel-loader']
          },
          {
              exclude: /\.module\.s?css$/i,
              test: /\.s?css$/i,
              use: [
                  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                  {
                      loader: 'css-loader',
                      options: {
                          modules: {
                              localIdentName: '[name]__[hash:base64:5]',
                              mode: 'icss',
                          },
                      },
                  },
                  'sass-loader',
              ],
          },
          {
              test: /\.module\.s?css$/i,
              use: [
                  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                  {
                      loader: 'css-loader',
                      options: {
                          modules: {
                              localIdentName: '[name]__[hash:base64:5]',
                              mode: 'local',
                          },
                      },
                  },
                  'sass-loader',
              ],
          },
          {
              generator: {
                  filename: 'static/[hash][ext]',
              },
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
      ],
    },
    // optimization: {
    //   minimizer: ['...', new CssMinimizerPlugin()],
    // },
    output: {
        clean: true,
        environment: {
            arrowFunction: false,
        },
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, './build'),
    },
    performance: {
      hints: false,
      maxAssetSize: 512000,
      maxEntrypointSize: 512000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        ...(isDev
            ? [new MiniCssExtractPlugin()]
            : [
                new MiniCssExtractPlugin({
                    chunkFilename: '[name].[contenthash].css',
                    filename: '[name].[contenthash].css',
                }),
              ]),
        // ...(withReport ? new BundleAnalyzerPlugin() : ''),
    ],
    resolve: {
        alias: {
           components: path.resolve(__dirname, 'src/components/'),
           src: path.resolve(__dirname, 'src'),
           store: path.resolve(__dirname, 'src/store'),
           svg: path.resolve(__dirname, 'src/assets/svg'),
        },
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
}