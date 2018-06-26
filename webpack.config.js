const webpack = require('webpack');
const path = require('path');

module.exports = {

	devtool:"source-map",

	entry:{
		index:'./src/index.js',
		list2:'./src/list2.js'	,
		list3:'./src/list3.js'	
	}, 

	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ["react",'env']
				}
			}
		]
	},

	devServer:{
		contentBase:'./dist'
	}
};