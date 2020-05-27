const path = require('path');
module.exports = {
    entry: './src/index.tsx',
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
            }
        ]
    },
    devServer: {
        contentBase: './dist',  // 根目录， 默认同级
        open: true,  // 自动打开浏览器
        port: 8080   // 端口号
    }
};