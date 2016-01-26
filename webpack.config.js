var webpack = require('webpack');
var path = require('path');
var ReloadPlugin = require('webpack-reload-plugin');
var nib = require('nib');

var PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist')
};

var config = {
	context: PATHS.src,
	entry: PATHS.src,
	output: {
		path: PATHS.src,
		filename: 'bundle.js'
	},
	plugins: [
	],
	module: {
		loaders: [ 
			{
				test: /\.html$/, 
				loader: 'raw', 
				exclude: /node_modules/
			},
			{
				test: /\.css$/, 
				loader: 'style!css'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "file-loader?name=img/[name].[ext]"
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'url-loader?limit=8192'
			},
			{ 
				test: /\.styl$/, 
				loader: 'style-loader!css-loader!stylus-loader' 
			}
		]
	},
	stylus: {
		use: [require('nib')()],
		import: ['~nib/lib/nib/index.styl']
	}
};

if(process.env.NODE_ENV === 'development'){
	config.plugins.push(new ReloadPlugin("localhost"));
};

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'){
	config.output.path = PATHS.dist;
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
};


module.exports = config;