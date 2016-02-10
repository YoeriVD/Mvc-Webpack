/// <binding ProjectOpened='Watch - Development' />
"use strict";
var path = require("path");

module.exports = {
  entry: "./src/app.module.ts",
  output: {
    filename: "./dist/app.js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
    alias : {
      "core": path.resolve("./src/core/core.module")
    }

  },
  module: {
    loaders: [
        {
          test: /\.ts$/,
          loader: "ts-loader"
        },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" }
    ]
  }
};
//
//module.exports = {
//  entry: "./CoreModule/TestCoreFile1.ts",
//  output: {
//    filename: "./wwwroot/bundle.js"
//  },
//  devServer: {
//    contentBase: ".",
//    host: "localhost",
//    port: 9000
//  },
//  devtool: 'source-maps',
//  resolve: {
//    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
//
//  },
//  module: {
//    loaders: [
//        { test: /\.tsx?$/, loader: 'ts-loader' }
//    ]
//  }
//
//}
