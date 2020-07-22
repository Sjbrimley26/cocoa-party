const TerserPlugin = require("terser-webpack-plugin")
const path = require("path");

module.exports = {
  entry: "./frontend/app.js",
  
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "./"
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
};