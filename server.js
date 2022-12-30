const express = require('express')

const app = express()

app.use('/',express.static(__dirname+"/public"))
app.get('/')
app.listen("4545", ()=>{
    console.log("server started on localhost:4545")
})