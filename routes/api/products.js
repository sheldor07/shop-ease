const route=require('express').Router();
const Product=require('../../db').Product

route.get('/',(req,res)=>{
    //we want to send array of users from db
    Product.findAll()
        .then((products) =>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error:err.message
            })
        })

})

route.post('/',(req,res)=>{
    //we expect req to have name in it
    //we need to validate the input values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"price is not a valid number"
        })
    }
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price),
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({
            error:"error could not add product"
        })
    })

})
exports = module.exports = route