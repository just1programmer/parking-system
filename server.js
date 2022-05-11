require("dotenv").config();
const express = require("express");
const mongoose=require ("mongoose");

// we import routes here
const authRoute = require('./routes/auth');


const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/api",(req,res)=>{
    res.send("Transylvania Parking System");
});

// underneath the routes here, we will use the route we have imported.
// with app.use()

app.use("/api/auth",authRoute);

// setting up the database connection

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to the MONGO database")

    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log(error);
})



