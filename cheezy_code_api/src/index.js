const express = require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();
const mongoose = require("mongoose")

app.use("/users", userRouter);
app.use('/note', noteRouter);

app.get("/", (req,res)=>{
    res.status(200).send("Hello My Ist api")

});

mongoose.connect("mongodb://localhost:27017/e-com")
.then(()=>{

    app.listen(5000,()=>{
        console.log("Server started on port number 5000")
    })
    
})
.catch((error)=>{
    console.log(error)

})

