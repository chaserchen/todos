var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'mobile.app.min.js'
	},
	module: {
		loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
		]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
