const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
		plugins: ['@babel/syntax-dynamic-import'],
	},
};

module.exports = {
	entry: './src/index',
	mode: 'production',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
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
	],
};
