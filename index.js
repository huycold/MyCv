var express = require("express");

var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname,"./public")));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/",(req,res,next)=>{
    res.render("index");
})
app.listen(3000,()=>{
    console.log("server is running")
})