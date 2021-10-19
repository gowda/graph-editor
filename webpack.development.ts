import * as path from 'path';
import { HotModuleReplacementPlugin, Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import common from './webpack.common';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge<Configuration>(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
});

export default config;
