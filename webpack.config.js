const webpack = require('webpack')
const path = require('path')

module.exports = {
	devtool: 'source-map',
	entry: {
		'app': [
			'babel-polyfill',
			'react-hot-loader/patch',
			'./src/index'
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.css/,
				loaders: ['style-loader', 'css-loader'],
				include: __dirname + '/src',
				exclude: /node_modules/
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
			{
			  test: /\.(jpg|png|svg)$/,
			  loader: 'url-loader',
			  options: {
			    limit: 25000,
			  },
			}
		]
	},


}
