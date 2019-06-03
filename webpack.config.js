const path = require('path');
const config = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude:/node_modules/,
            test: /\.js?$/,
            loader: 'babel-loader',
        },{
           test:/\.s?css$/,
           use: [
               'style-loader',
               'css-loader',
               'sass-loader'
           ]
        }]
    },
devtool: 'cheap-module-eval-source-map',
devServer: {
    contentBase: path.join(__dirname, 'public')
}
};

module.exports = config;
