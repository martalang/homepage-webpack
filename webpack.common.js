const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
    game: "./src/js/game.js",
    banner: "./src/js/banner.js",
    timer: "./src/js/timer.js"
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [{
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{
          loader: "file-loader",
          options: {
            name: "img/[name].[hash:8].[ext]",
          },
        }, ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: "public"
      }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/html.html",
      inject: true,
      chunks: ["index"],
      filename: "html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/css.html",
      inject: true,
      chunks: ["index"],
      filename: "css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/skills-and-tools.html",
      inject: true,
      chunks: ["index"],
      filename: "skills-and-tools.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/my-projects.html",
      inject: true,
      chunks: ["index", "timer"],
      filename: "my-projects.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/game.html",
      inject: true,
      chunks: ["index", "game"],
      filename: "game.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/banner.html",
      inject: true,
      chunks: ["index", "banner"],
      filename: "banner.html",
    }),
  ],
};