const express=require('express');
const app=express();
const path=require('path');
const User=require('./user');

app.set("views enging","views");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,("/public"))));
var methodoverride=require('method-override');
app.use(express.urlencoded({extended:true}))

app.use(methodoverride('_method'));

//login route

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

//index route
app.get("/",async(req,res)=>{
    const users=await User.find();
    res.render("index.ejs",{users});
})
//new msg route
app.get("/msg/:id/user",async(req,res)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    res.render("chat.ejs",{user});
})

app.get("/new",(req,res)=>{
    const user=new User({
        name:"sachin",
        password:"3222"
    })
    user.save();
    res.redirect("/")
})


app.listen(3000,()=>{
    console.log("server runing on port 800...")
})