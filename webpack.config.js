const { resolve, join } = require("path");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ENV = process.argv.find(arg => arg.includes("production")) ? "production" : "development";
const OUTPUT_PATH = ENV === "production" ? resolve("dist") : resolve("src");
const INDEX_TEMPLATE = resolve("./src/index.html");

const webcomponentsjs = "./node_modules/@webcomponents/webcomponentsjs";

const polyfills = [
	{
		from: resolve(`${webcomponentsjs}/webcomponents-*.js`),
		to: join(OUTPUT_PATH, "vendor"),
		flatten: true
	},
	{
		from: resolve(`${webcomponentsjs}/bundles/*.js`),
		to: join(OUTPUT_PATH, "vendor", "bundles"),
		flatten: true
	},
	{
		from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
		to: join(OUTPUT_PATH, "vendor"),
		flatten: true
	}
];

const commonConfig = merge([
	{
		entry: "./src/portfolio-app.js",
		output: {
			path: OUTPUT_PATH,
			filename: "[name].[chunkhash:8].js"
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						{
							loader: "babel-loader",
							options: {
								babelrc: true,
								extends: join(__dirname + "/.babelrc"),
								cacheDirectory: true,
								envName: ENV
							}
						}
					]
				}
			]
		}
	}
]);

const developmentConfig = merge([
	{
		devtool: "cheap-module-source-map",
		plugins: [
			new CopyWebpackPlugin(polyfills),
			new HtmlWebpackPlugin({
				template: INDEX_TEMPLATE
			})
		],

		devServer: {
			contentBase: OUTPUT_PATH,
			compress: true,
			overlay: true,
			port: 3000,
			historyApiFallback: true,
			host: "0.0.0.0"
		}
	}
]);

const productionConfig = merge([
	{
		devtool: "nosources-source-map",
		plugins: [
			new CleanWebpackPlugin({ verbose: true }),
			new CopyWebpackPlugin([...polyfills]),
			new HtmlWebpackPlugin({
				template: INDEX_TEMPLATE,
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					minifyCSS: true,
					minifyJS: true
				}
			})
		]
	}
]);

module.exports = mode => {
	if (mode === "production") {
		return merge(commonConfig, productionConfig, { mode });
	}

	return merge(commonConfig, developmentConfig, { mode });
};
