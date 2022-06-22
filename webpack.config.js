const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    devServer: {
        client: {
            logging: 'info',
        },
        compress: true,
        historyApiFallback: true,
        port: 8000,
    },
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'hidden-source-map'
            : 'eval-source-map',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        clean: true,
        environment: {
            arrowFunction: false,
        },
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, './build'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
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
        ]
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
    ]
}