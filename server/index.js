const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
url = "mongodb+srv://Tempsens:Tempsens@tempsens.o8skpx3.mongodb.net/test"
const app = express()
const TempSchema = require("./Temp");

app.use(cors() );
app.use(express.json())
mongoose
  .connect(url, {
    
    keepAlive: true,
    socketTimeoutMS: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb successfully connected"))
  .catch((err) => console.error(err));
  


  app.get("/lastten",async(req,res)=>{
    const list = await TempSchema.find().sort({_id:-1}).limit(10);
    ;
   if(list){
     res.json(list)
   }
   else{
     res.json({msg:"error"})
   }
  })
  

  
  
  app.post("/addtemp",async(req,res)=>{
 

   
    const newtemp = new TempSchema({
        time: req.body.time,
        teperature: req.body.teperature,
        humidity:req.body.humidity,
        val1:req.body.val1,
        val2:req.body.val2,
        val3:req.body.val3
               
    });
    newtemp
      .save()
      .then(() => res.json({msg:"success"}))
      .catch((err) => console.error(err));
  
})

  

app.listen(5000,()=>{
    console.log("lisiterning to port 5000")
  })
  
  
  