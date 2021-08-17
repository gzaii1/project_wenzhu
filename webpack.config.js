const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack')
const PostcssNormalize = require('postcss-normalize')
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

module.exports = function (env) {
    const isDev = env === 'development';
    const isProd = env === 'production';

    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
          isDev && require.resolve('style-loader'),
          isProd && {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: cssOptions,
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
                PostcssNormalize(),
              ],
              sourceMap: true,
            },
          },
        ].filter(Boolean);

        if (preProcessor) {
          loaders.push(
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true,
                root: path.resolve(__dirname, './src'),
              },
            },
            {
              loader: require.resolve(preProcessor),
              options: {
                sourceMap: true,
              },
            }
          );
        }
        return loaders
    }
    return {
        entry: {
          main: './src/index.js',
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'static/js/[name].[contenthash:8].js',
            chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        },
        optimization: {
          minimize: isProd,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                parse: {
                  ecma: 8,
                },
                compress: {
                  ecma: 5,
                  warnings: false,
                  comparisons: false,
                  inline: 2,
                },
                mangle: {
                  safari10: true,
                },
                output: {
                  ecma: 5,
                  comments: false,
                  ascii_only: true,
                },
              },
              // sourceMap: true,
            }),
            // This is only used in production mode
            new OptimizeCSSAssetsPlugin({
              cssProcessorOptions: {
                parser: safePostCssParser,
                map: {
                  inline: false,
                  annotation: true,
                },
              },
              cssProcessorPluginOptions: {
                preset: ['default', { minifyFontValues: { removeQuotes: false } }],
              },
            }),
          ],
          splitChunks: {
            chunks: 'all',
          },
          runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
          },
        },
        plugins: [
          PnpWebpackPlugin,
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            minify: isProd ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            } : {},
          }),
        isProd &&
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
          }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ESLintPlugin({
          extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
          formatter: require.resolve('react-dev-utils/eslintFormatter'),
          eslintPath: require.resolve('eslint'),
          context: './src/index.js',
          cache: true,
          cacheLocation: path.resolve(
            '.cache/.eslintcache'
          ),
          cwd: path.resolve(__dirname, './src/index.js'),
          resolvePluginsRelativeTo: __dirname,
          baseConfig: {
            extends: [require.resolve('eslint-config-react-app/base')],
            rules: {
              // 'react/react-in-jsx-scope': 'error',
            },
          },
        }),
        ].filter(Boolean),
        resolveLoader: {
          plugins: [
            PnpWebpackPlugin.moduleLoader(module),
          ],
        },
        module: {
            strictExportPresence: true,
            rules: [
              {
                parser: {
                  requireEnsure: false,
                },
              },
              {
                oneOf: [
                  {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: 'url-loader',
                    options: {
                      limit: imageInlineSizeLimit,
                      name: 'static/media/[name].[hash:8].[ext]',
                    },
                  },
                  // 通过babel处理JavaScript
                  {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    include: path.resolve(__dirname, './src'),
                    loader: 'babel-loader',
                    options: {
                      presets:  [
                        require("@babel/preset-env"),
                        [
                          "@babel/preset-react",
                          {
                            "runtime": "classic"
                          }
                        ]
                      ],
                      plugins: [
                        [
                          'babel-plugin-named-asset-import',
                          {
                            loaderMap: {
                              svg: {
                                ReactComponent:
                                  '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                              },
                            },
                          },
                        ],
                        // isEnvDevelopment &&
                        //   shouldUseReactRefresh &&
                        //   require.resolve('react-refresh/babel'),
                      ].filter(Boolean),
                      cacheDirectory: true,
                      cacheCompression: false,
                      compact: isProd,
                    },
                  },
                  {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: getStyleLoaders({
                      importLoaders: 1,
                      sourceMap: true,
                    }),
                    sideEffects: true,
                  },
                  {
                    test: /\.module\.css$/,
                    use: getStyleLoaders({
                      importLoaders: 1,
                      sourceMap: true,
                      modules: {
                        getLocalIdent: getCSSModuleLocalIdent,
                      },
                    }),
                  },
                  {
                    test: /\.(scss|sass)$/,
                    exclude: /\.module\.(scss|sass)$/,
                    use: getStyleLoaders(
                      {
                        importLoaders: 3,
                        sourceMap: true,
                      },
                      'sass-loader'
                    ),
                    sideEffects: true,
                  },
                  {
                    test: /\.module\.(scss|sass)$/,
                    use: getStyleLoaders(
                      {
                        importLoaders: 3,
                        sourceMap: true,
                        modules: {
                          getLocalIdent: getCSSModuleLocalIdent,
                        },
                      },
                      'sass-loader'
                    ),
                  },
                  {
                    test: /\.less$/,
                    exclude: /\.module\.less$/,
                    use: getStyleLoaders(
                      {
                        importLoaders: 3,
                        sourceMap: true,
                      },
                      'less-loader'
                    ),
                    sideEffects: true,
                  },
                  {
                    test: /\.module\.less$/,
                    use: getStyleLoaders(
                      {
                        importLoaders: 3,
                        modules: true,
                      },
                      'less-loader'
                    ),
                  },
                  {
                    loader: require.resolve('file-loader'),
                    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                    options: {
                      name: 'static/media/[name].[hash:8].[ext]',
                    },
                  },
                ]
              }
            ]
        },
        mode: env,
        bail: isProd,
        devtool: isProd ? 'source-map' : 'cheap-module-source-map',
        performance: false,
    }
}