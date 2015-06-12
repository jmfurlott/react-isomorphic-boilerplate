import express from "express";
import React from "react";
import Router from "react-router";
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {

  res.render('index', { title: 'hey', message: 'world' });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
