const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js'
		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	// resolve: {
	// 	fallback: {
	// 		"fs": false,
	// 		"path": require.resolve("path-browserify"),
	// 		"os": require.resolve("os-browserify/browser"),
	// 		"stream": require.resolve("stream-browserify"),
	// 		"constants": require.resolve("constants-browserify"),
	// 		"domain": require.resolve("domain-browser"),
	// 	}
	// }
	resolve: {
		fallback: {
			"fs": false,
			"path": false,
			"os": false,
			"stream": false,
			"constants": false,
			"domain": false,
		}
	}
};

module.exports = config;
