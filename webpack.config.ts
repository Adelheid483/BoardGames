const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function buildLoaders() {
    return [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: "ts-loader",
        },
        {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.(jpg|png|gif)$/,
            use: "file-loader",
        },
    ];
}

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    devtool: "inline-source-map",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        port: 3000,
        static: "./dist",
        historyApiFallback: true,
    },
    module: {
        rules: buildLoaders(),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.ProgressPlugin(),
    ],
};
