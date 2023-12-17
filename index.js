const express = require("express")

// init the app
const app = express()

// view the engine
app.set("view engine","ejs")

// run the server
app.listen(8000,()=>{
    console.log("Server is running")
})