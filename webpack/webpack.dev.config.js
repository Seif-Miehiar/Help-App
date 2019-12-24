var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname);
var path2 =path.join(__dirname,'../')

console.log("qqqqqqqqq",path2)

module.exports = {
    entry: [
        path.resolve(path2, 'client/index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
