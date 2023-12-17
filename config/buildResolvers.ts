import webpack from "webpack";
import path from "path";
import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import HtmlWebpackPlugin from "html-webpack-plugin";

import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {BuildOptions} from "./types/type";

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@':options.paths.src
        }
    }
}