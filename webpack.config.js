const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use: [
                    {
                    loader: 'babel-loader',
                    options:{
                            presets:[
                                "@babel/env", "@babel/react"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',  // 根目录， 默认同级
        open: true,  // 自动打开浏览器
        port: 8080   // 端口号
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx']
    }
};