import {buildWebpack} from "./config/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/types/type";
import path from "path";


interface EnvVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean,
    platform: BuildPlatform
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src')
    }
    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })
}