import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("<h1>Hello,Mr Bond.</h1>" );
})

app.get("/about", (req,res)=>{
    res.send("<h1>About Me</h1> <p>My Name Is Twana</p>");
})

app.get("/contact", (req,res)=>{
    res.send("<h1>Contact Me</h1> <p>phone number: 0751 25  85 385</p>");
})

app.listen(port,()=>{
    console.log(`server is runing on server ${port}.`);
});