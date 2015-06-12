// Webpack dev server
// Ran in parallel with the Express server

import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../../webpack.config.dev";

var server = new WebpackDevServer(webpack(config), {
  // webpack-dev-server options
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: true,
  filename: "bundle.js",
  publicPath: "/assets/",
  stats: { colors: true },
});
server.listen(8080, "localhost", function() {});
