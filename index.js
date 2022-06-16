const express= require("express");
const app = express();
 

app.get("/",  (req, res)=>  { res.send("hello from this side"); });

 app.get("/about", (req,res)=>{
    res.send(" this is the about page "); });

app.get("/services", (req, res)=>{ res.send(" this is the services side on this port");});
app.get("/contact", (req, res)=>{ res.send(" this is the contact side on this port contact via email");});


app.listen(8000,() =>{ console.log("listening to the port number 8000");});




