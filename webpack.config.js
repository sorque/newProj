const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: {
        main:'./src/index.jsx',
        new:'./src/new.js',
    },
    //context: path.resolve,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    resolve: { 
        extensions: [".js",".jsx"],
    },
    module: {
        rules: [{
            test: /\.js(x)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
                plugins: [
                    ["@babel/plugin-proposal-class-properties", { "loose": true }]],
                }
            }
        }
    ]},
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: 
        [new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
    ],
};