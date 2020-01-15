const path = require("path");
const debug = process.env.NODE_ENV !== "production" ? true : false;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const entry = {
  login: path.resolve(__dirname, 'src/pages/login/login.js'),
  index: path.resolve(__dirname, 'src/pages/index/index.js'),
  edit: path.resolve(__dirname, 'src/pages/edit/edit.js'),
  info: path.resolve(__dirname, 'src/pages/info/info.js'),
  family: path.resolve(__dirname, 'src/pages/family/family.js'),
  work: path.resolve(__dirname, 'src/pages/work/work.js'),
  education: path.resolve(__dirname, 'src/pages/education/education.js'),
  marriage: path.resolve(__dirname, 'src/pages/marriage/marriage.js'),
  migration: path.resolve(__dirname, 'src/pages/migration/migration.js'),
  income: path.resolve(__dirname, 'src/pages/income/income.js'),
  land: path.resolve(__dirname, 'src/pages/land/land.js'),
  personal: path.resolve(__dirname, 'src/pages/personal/personal.js'),
  personalHouse: path.resolve(__dirname, 'src/pages/personalHouse/personalHouse.js'),
  personalLand: path.resolve(__dirname, 'src/pages/personalLand/personalLand.js'),
  personalFarm: path.resolve(__dirname, 'src/pages/personalFarm/personalFarm.js'),
  personalVehicle: path.resolve(__dirname, 'src/pages/personalVehicle/personalVehicle.js'),
  personalLivestock: path.resolve(__dirname, 'src/pages/personalLivestock/personalLivestock.js'),
  partyMember: path.resolve(__dirname, 'src/pages/partyMember/partyMember.js'),
  retire: path.resolve(__dirname, 'src/pages/retire/retire.js'),
}
const getHtmlPlugins = () => {
  let htmlPlugins = [];

  Object.keys(entry).map(item => {
    htmlPlugins.push(new HtmlWebpackPlugin({
      filename: `pages/${item}/${item}.html`,
      template: `src/pages/${item}/${item}.hbs`,
      inject: true,
      chunks: [`${item}`, "common"],
      minify: {
          removeComments: true,
          collapseWhitespace: true
      }
    }))
  })

  return htmlPlugins;
}

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'), // 绝对路径
    filename: debug
      ? "pages/[name]/js/[name].js"
      : "pages/[name]/js/[name].[chunkhash:8].js",

    chunkFilename: debug
      ? "global/js/[name].js"
      : "global/js/[name].[chunkhash:8].js",
    publicPath: "/"

  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              // inlineRequires: /^(?!(https?)?:?\/\/).*\.(png|jpe?g|gif)(\?.*)?$/,
              // helperDirs: helpers,
              // partialDirs: [
              //   path.join(__dirname, 'src/components'),
              //   path.join(__dirname, 'src/global/tmpl'),
              //   path.join(__dirname, 'src')
              // ],
            }
          },
          // "translate-hbs-disable"
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {}
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 15 * 1000, //低于10K，
              name: debug
                ? "global/img/[name].[ext]"
                : "global/img/[name].[hash:8].[ext]",
              publicPath: "/" //指定了目录，那么开发环境下，就要保证 CSS文件和HTML文件保持同级
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory"
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "global/fonts/[name]" + (debug ? "" : ".[hash:8]") + ".[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins:[
    ...getHtmlPlugins(),
    new MiniCssExtractPlugin({
      filename: debug
        ? "pages/[name]/[name].css"
        : "pages/[name]/[name].[chunkhash:8].css",

      chunkFilename: debug
        ? "global/css/[name].css"
        : "global/css/[name].[chunkhash:8].css"

    })
  ],

  optimization: {
    minimize: true, //开启压缩
  },

  resolveLoader: {
    modules: ["node_modules", "./webpack-config/"]
  },

  stats: debug ? "normal" : "errors-only", //打包信息只输出错误，其他都没有  —— 导致ESLint 部分功能无法工作

  devServer: {
    noInfo: true,
    inline: true,
    overlay: true,
    open: 'Google Chrome',
    watchContentBase: true,
    historyApiFallback: true,
    contentBase: debug ? "../src" : "../dist",
    disableHostCheck: true,//服务器资源的根目录
    // writeToDisk: true,
    stats: {
      colors: true
    },
    proxy:{
      '/reliefmgr/**': {
        target: 'http://47.99.183.164:8080',
        secure: false
      }
    }
  },

  resolve: {
    // mainFields: ["module", "jsnext:main", "main"],
    // extensions: [".js", ".json", ".jsx", ".css", ".scss", ".hbs"],
    // 使用的扩展名
    alias: {
      global: path.resolve(__dirname, "../src/global"),
    }
  },

  mode: debug ? "development" : "production",

  devtool: debug ? "cheap-module-eval-source-map" : "none"
};
