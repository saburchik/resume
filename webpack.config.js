const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `main/[name].${ext}` : `main/[name].[hash:8].${ext}`

const babelOption = preset => {
    const opts = {
        presets: ['@babel/preset-env'],
        // plugins: ['something plugins']
    }
    if (preset) {
        opts.presets.push(preset)
    }
    return opts
}

const jsLoader = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOption()
    }]
    // if (isDev) {
    //     loaders.push('eslint-loader')
    // }
    return loaders
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'build')
                }]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
    ]

    // if (isProd) {
    //     base.push(new BundleAnalyzerPlugin())
    // }
    return base
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx']
    },
    performance: { hints: false },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            assets$: path.resolve(__dirname, 'assets'), // example with folder;
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        port: 4200,
        hot: true,
        historyApiFallback: true
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoader(),
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOption('@babel/preset-react')
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                // plugins: () => [
                                //     require("postcss-preset-env")()
                                // ],
                                plugins: [["postcss-preset-env"]]
                            }
                        },
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|webp|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/imgs/[name].[hash:8][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name].[hash:8][ext][query]'
                }
            },
        ]
    }
}