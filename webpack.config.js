const path = require('path');
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
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
        extensions: ['.ts', '.js']
    }
};