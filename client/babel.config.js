module.exports = {
	presets: [
		// '@vue/babel-preset-jsx',
		// '@vue/cli-plugin-babel/preset',
		// '@babel/preset-env',
		'@vue/app',
	],
	plugins: [
		[
			'component',
			{
				libraryName: 'element-ui',
				styleLibraryName: 'theme-chalk',
			},
		],
	],
	exclude: [
		'./src/server'
	]

};
