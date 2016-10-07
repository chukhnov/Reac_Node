var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'client/index.js'),
    devtool: 'eval',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    module: {

        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};

module.exports = config;