var firebase = require('firebase');
var express=require('express');
//var firebaseui = require('firebaseui');
  // Initialize Firebase for the application 
var app=express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
//app.set('/js',__dirname+ 'public/javascripts');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//var ui = new firebaseui.auth.AuthUI(firebase.auth());
//var ui = new firebaseui.auth.AuthUI(firebase.auth());
//app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req,res){
    //res.send("Hi");
   res.render("index.html");
});
app.get('/dashboard.html',function(req,res){
    //res.send("Hi");
   res.render("dashboard.html");
});
app.get('/registerofficial.html',function(req,res){
    //res.send("Hi");
   res.render("registerofficial.html");
});
app.listen(3000,function(){console.log("App is running");});