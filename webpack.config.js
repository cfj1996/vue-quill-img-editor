const path = require('path')
const resolve = dir => path.join(__dirname, '..', dir)
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: "production",
    entry: {
        'vue-quill-img-editor': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].js',
        library: 'vue-quill-img-editor',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                include: [resolve('src')]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ],
    }
}
