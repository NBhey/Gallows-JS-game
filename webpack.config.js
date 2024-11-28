const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

module.exports = {
  // определяем точку входа приложения
  entry: {
    main: path.resolve(__dirname, "./index.js"),
  },
  //   точка выхода - это директория. в которую помещаются скомпилированные вебпаком файлы
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js", //name соответствует названию файла в src (index)
  },

  devServer: {
    historyApiFallback: true,
    open: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Виселица",
      template: path.resolve(__dirname, "./index.html"),
      output: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
