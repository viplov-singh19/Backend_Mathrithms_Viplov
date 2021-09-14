# Backend_Mathrithms_Viplov

I have used node.js and express.js for making he Restful API. To post data to the API i have created a post route and using postman software we can add data to the API.
The API Runs on localhost 5001. 
It has two endpoints namely '/users' that returns information of all the users. '/users/<userid>' which returns the information of a specific user. 
 
 I have used mongodb locally to store the database : mongoose.connect("mongodb://localhost:27017/information", {useNewUrlParser: true});
  
Used different node modules :
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
  
  
