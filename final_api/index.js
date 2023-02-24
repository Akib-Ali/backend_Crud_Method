const express = require('express');
require("./config");

let Product = require('./product');

const app = express();
app.use(express.json())


//middleware

const reqfilter=(req,resp,next)=>{

    if(!req.query.name){
        resp.send('Please provide author name')

    }else if(req.query.name != "akib"){
        resp.send('You Are not right person')
        
    }else{
        next()
    }



}

app.use(reqfilter)


//post api

app.post("/create", async (req,resp)=>{
   let data = new Product(req.body)
   const  result = await data.save()
   // console.log(req.body)

    //resp.send(req.body)
    resp.send(result)
    
})



//get api 

app.get("/list", async(req,resp)=>{

    let data = await Product.find();
    resp.send(data)


})



//delete api

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})


app.listen(5000)