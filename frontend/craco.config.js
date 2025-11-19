// Load configuration from environment or config file
const path = require('path');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env }) => {
      
      // Production optimizations
      if (env === 'production') {
        // Remove console.logs in production
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          usedExports: true,
          minimize: true,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
                reuseExistingChunk: true,
              },
              radix: {
                test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
                name: 'radix-vendor',
                priority: 20,
                reuseExistingChunk: true,
              },
              common: {
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true,
              },
            },
          },
          runtimeChunk: 'single',
        };

        // Remove source maps in production
        webpackConfig.devtool = false;
      }
      
      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });
        
        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }
      
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      mode: 'file',
      loaderOptions: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer',
              {
                // Options
              },
            ],
            [
              'cssnano',
              {
                preset: ['default', {
                  discardComments: {
                    removeAll: true,
                  },
                }],
              },
            ],
          ],
        },
      },
    },
  },
};