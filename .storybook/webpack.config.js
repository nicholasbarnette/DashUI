const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = ({ config, mode }) => {
	config.module.rules.push({
		test: /\.tsx?$/,
		use: [{ loader: 'ts-loader' }],
	});
	config.module.rules.push({
		test: /\.s?css$/,
		use: [
			{ loader: 'style-loader' },
			{
				loader: 'css-loader',
				options: { modules: true, sourceMap: true },
			},
			{ loader: 'sass-loader', options: { sourceMap: true } },
		],
	});
	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		}),
	);
	config.module.rules.push({
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
	});
	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};
