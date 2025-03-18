export default {
  module: {
    rules: [
      {
        // exclude: /\.(jpg|png)/,
        use: "babel-loader",
        exclude: /\.(scss|css|otf|ttf|json)/, // Stops babel-loader from trying to compile non JS files
        test: /\.js/, // wanting babel-loader to only look at js
      },
      {
        test: /\.(scss|css)/,
        use: ["style-loader", "css-loader", "sass-loader"], // compiles style modules
      },
      {
        test: /\.(jpg|png|mp4)/, //Examine asset files
        type: "asset/resource", // a built-in feature to handle assets
      },
    ],
  },
  watch: true, // Watches for code change, used to auto complie.
  watchOptions: { aggregateTimeout: 4000 }, // best to add this to give webpack more time to compile files
  mode: "development", // Mode that enables debugger
  devtool: "source-map", // Enables debugger code to match actual code.
};

// Must install packages
// npm install sass sass-loader css-loader style-loader
// Have to configure webpack. Using json.
