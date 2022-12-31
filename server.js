const express = require('express')
const path = require('path')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const routes = {
    products: require('./routes/api/products'),
    users: require('./routes/api/users'),
  }
app.use('/',express.static(__dirname+"/public"))
app.use('/users', routes.users)
app.use('/products', routes.products)
//IMP:tries to find ./routes/api.js if not then ./routes/api.json if not then ./routes/api containing index.js
//so above line gets index.js
app.get('/')
app.listen("4545", ()=>{
    console.log("server started on localhost:4545")
})