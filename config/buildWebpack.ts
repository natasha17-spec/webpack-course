import webpack from "webpack";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

import {BuildOptions} from "./types/type";


export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    const isDev = mode === 'development'
    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        output: {
            path: paths.output,
            filename: "bundle.[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}