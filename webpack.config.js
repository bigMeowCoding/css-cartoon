const webpack = require("webpack");
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require("terser-webpack-plugin");
const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: "./index.html",
  }),
  new CleanWebpackPlugin(),
];
if (!devMode) {
  // enable in production only
  plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  plugins,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        resolve: {
          extensions: [".scss"],
        },
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "",
                },
              },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8081,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};
