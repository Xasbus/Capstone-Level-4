import { Configuration } from "webpack";
import Zip from "zip-webpack-plugin";

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)/, // Compile these files with babel-loader
        exclude: /.(json)/, // Don't compile json files with babel-loader
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts"], //Automatically inserts file extensions
  },
  target: "node", // value for target by default is "web"
  // webpack thinks you using it for webpage
  output: {
    filename: "index.js", // Change the name of the bundle file (default is main.js)
    library: {
      type: "commonjs", // Prevents tree shaking of unused bundle exports
    },
  },
  plugins: [new Zip({ include: /^index.js$/ })], // Class name "Zip" matching the class imported from top.
  // plugin zips up the bundle file
  // Zips everything into one file saving space
} as Configuration;
