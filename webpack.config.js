const VueLoaderPlugin = require("vue-loader/lib/plugin")
const { merge } = require("webpack-merge")
const clientConfig = require("./config/client")
const serverConfig = require("./config/server")

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    console.log(argv.mode)
    return merge(commonConfig, clientConfig)
  }

  if (argv.mode === "production") {
    return merge(commonConfig, serverConfig)
  }
}