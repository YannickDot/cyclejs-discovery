var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var ip = '0.0.0.0';
var iplocal = 'localhost';
var port = 3000;

config.entry.app.unshift('webpack/hot/dev-server')
config.entry.app.unshift('webpack-dev-server/client?http://'+ iplocal + ':' + port);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: "./",
  publicPath: config.output.publicPath,
  headers:     {"Access-Control-Allow-Origin": "*"},
	stats:       {colors: true},
  inline:      true
});

server.listen(port, iplocal, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' +iplocal+':'+port);
});
