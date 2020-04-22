const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
})

app.get("/", function(req, res){
  res.render("index");
})
