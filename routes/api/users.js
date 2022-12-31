

const User=require('../../db').User //getting User class from db.js
const route=require('express').Router()

route.get('/',(req,res)=>{
    //we want to send array of users from db
    User.findAll()
        .then((users) =>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"could not receive users"
            })
        })

})

route.post('/',(req,res)=>{
    //we expect req to have name in it
    User.create({
        name:req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:"could not add user"
        })
    })

})

exports=module.exports=route