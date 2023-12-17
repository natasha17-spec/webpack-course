import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from 'webpack';
import {BuildOptions} from "./types/type";
import {buildBabelLoader} from "./babel/buildBabelLoader";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }
    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: false
                            }
                        }
                    ]
                }
            }
        }],
    }
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        }
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            !isDev ? MiniCssExtractPlugin.loader : "style-loader",
            cssLoaderWithModules,
            "sass-loader"
        ]
    }

    // const tsLoader = {
    //     exclude: / node_modules/,
    //     test: /\.tsx?$/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 transpileOnly: isDev,
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
    //                 })
    //             }
    //         }],
    // }

    const babelLoader = buildBabelLoader(options)
    return [
        svgLoader, scssLoader, assetLoader, babelLoader
    ]
}