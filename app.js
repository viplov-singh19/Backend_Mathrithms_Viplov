const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/information", {useNewUrlParser: true});

const infoSchema = {
  id:Int,
  name:String,
  username:String,
  email:String,
  address:{street: String,suite:String,city:String,zipcode:String}
};

const Info = mongoose.model("Info", infoSchema);


app.route("/users")
.get(function(req,res){
  Info.find({},function(err,foundItems){
    if(!err){
      res.send(foundItems);
    }
    else{
      console.log(err);
    }
  });
})
.post(function(req,res){
const newInfo=new Info({
  id:req.body.id,
  name:req.body.name,
  username:req.body.username,
  email:req.body.module.email;,
  address:{street:req.body.street ,suite:req.body.suite,city:req.body.city,zipcode:req.body.zipcode}
});
newArticle.save(function(err){
  if(!err){
   res.send("success");
  }
  else{
    res.send(err);
  }
});
});



app.route("/users/:userID")
.get(function(req,res){
  Info.findOne({id:req.params.userID},function(err,foundINFO){
    if(foundArticle){
      res.send(foundINFO);
    }
    else{
      res.send(err);
    }
  });
});


app.listen(5001,function(){
  console.log("Successfully started server at port 3000")
});
