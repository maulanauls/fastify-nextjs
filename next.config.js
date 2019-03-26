const withSass = require('@zeit/next-sass');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const webpack = require('webpack');

module.exports = withSass({
  poweredByHeader: false,
  cssModules: true,
  webpack: (config, { dev }) => {
    // config.plugins.push(
    //   new webpack.EnvironmentPlugin({
    //     // Add env variables here
    //   }),
    // );

    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
      }
    }
    return config;
  },
});
