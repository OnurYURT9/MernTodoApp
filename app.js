const MongoClient = require("mongodb").MongoClient
const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 3000
const url = "mongodb://localhost:27017/todoapp"

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) throw err
    res.render("index",{data,docs})

})
const Gorev = require("./models/Gorev")
app.get("/",(req,res)=>{
   
   Gorev.find((err,docs)=>{
        if(err) throw err
       res.render("index",{data:docs})
   })
})

app.post("/",(req,res)=>{
    console.log("Post işlemi")
    
    const yeniGorev = new Gorev({
        isim:"Mongoose öğren"
    })
    yeniGorev.save((err)=> {
        if(err) throw err
        console.log("Veri kaydedildi")
    })
})

app.listen(PORT,()=>console.log(`Server ${PORT} portunda çalışıyor`))