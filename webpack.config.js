const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const babelLoader = {
	loader: 'babel-loader',
	options: {
		babelrc: false,
		presets: [
			[
				'@babel/preset-env',
				{
					useBuiltIns: 'entry',
					corejs: { version: 3 },
					targets: '> 1%',
					debug: false,
				},
			],
			'@babel/preset-react',
		],
	},
};

module.exports = {
	entry: './src/index',
	mode: 'production',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index.js',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		// alias: {
		// 	// Needed when library is linked via `npm link` to app
		// 	react: path.join(__dirname, './node_modules/react'),
		// 	'react-dom': path.join(__dirname, './node_modules/react-dom'),
		// },
	},
	performance: {
		maxEntrypointSize: 800000,
		maxAssetSize: 800000,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: { modules: true, sourceMap: true },
					},
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
			{
				test: /\.tsx?$/,
				include: /src/,
				use: [
					babelLoader,
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test: /\.ttf$/,
				include: /src/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		}),
		new CopyPlugin({
			patterns: [{ from: './src/assets', to: './assets' }],
		}),
	],
	externals: [
		// Don't bundle react or react-dom
		'react',
		'react-dom',
		'd3',
	],
};
