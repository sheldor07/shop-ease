const Sequelize = require('sequelize')

//connecting db to sequelize
const db = new Sequelize("shoppingdb","shopper","shoppingpass",{
    host:"localhost",
    dialect:"mysql",
    pool:{
        min:0,
        max:5,
    }
})
//we're creating a class called User and a class called Product
const User = db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    }
})
const Product = db.define('product', {
    id: {
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue:0.0
    },
    manufacturer: {
      type: Sequelize.STRING,
    }
  })

db.sync() 
    .then(()=>{ console.log("database has been created")})
    .catch((err)=>{ console.log(err)})

exports = module.exports=({User,Product})