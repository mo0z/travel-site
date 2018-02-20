module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor:  "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
