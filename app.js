const express=require('express')
const path=require('path')
const fs=require('fs')
const app=express()
const port=80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
//app.get("/",(req,res)=>{
    
//    const con="best content on "
//     const params={'title':'pubg is best game','content':con}
 //   res.status(200).send("this is home page");

 //})
 app.get("/",(req,res)=>{
    const con="best conteent"
    const parms={'title':'pung is bedt game','content':con}
     res.status(200).render('index.pug',parms)
})
 app.post("/",(req,res)=>{
    console.log(req.body);
    const parms={'messege':'form submitted succesfully'}
     res.status(200).render('index.pug',parms)
     name=req.body.name
     age=req.body.age
     gender=req.body.gender
     address=req.body.address
     more=req.body.more
     let outputtowrite=`the name is ${name} having age ${age}`
     fs.writeFileSync("output.txt",outputtowrite);
})
app.get("/about",(req,res)=>{
   
     res.status(200).render('about.pug')
})
app.get("/contact",(req,res)=>{
   
     res.status(200).render('contact.pug')
})
app.get("/plans",(req,res)=>{
   
     res.status(200).render('plans.pug')
})
// app.post("/about",(req,res)=>{
//     res.send("post request page ")
// })
 app.listen(port,()=>{
     console.log("derver started")
 })