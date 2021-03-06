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
    plugins: [
    	new webpack.optimize.UglifyJsPlugin({
    		compress: {
    			warnings: true
    		},
    		output: {
    			comments: true
    		}
    		}),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
