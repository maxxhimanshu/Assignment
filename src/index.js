const express = require("express")
const mongoose =require("mongoose")
const route=require("../src/routes/route")
const app=express()

var cors=require("cors")

app.use(express.json())

app.use("/",route);

app.use(cors())

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://maxxhimanshu:himanshu@cluster0.sg6kw.mongodb.net/digiaccel?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>console.log("mongoose connected"))
.catch(err=>console.log(err.message))


// mongoose.connect("mongodb+srv://wishall:vishal@atlascluster.p9u9uvd.mongodb.net/digiaccel?retryWrites=true&w=majority",{
//     useNewUrlParser:true
// }).then(()=>console.log("mongoose connected"))
// .catch(err=>console.log(err.message))



app.listen(3000,()=>{
    console.log("express is connected")
})
