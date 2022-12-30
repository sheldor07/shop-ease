const Sequelize = require('sequelize')

//connecting db to sequelize
const db = new Sequelize("shoppingdb","shopper","shoppingpass",{
    host:"localhost",
    dialect:"mysql",
    pool:{
        min:0,
        max:2,
    }
})
//we're creating a class called User and a class called Product
const User = db.define('users',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false

    }
})
const Product = db.define('products',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false

    },
    manufacturer:{
        type:Sequelize.DataTypes.STRING,
    },
    price:{
        defaultValue:0.0,
        type:Sequelize.DataTypes.FLOAT,
        allowNull:false,
    }
})

exports = module.exports({User,Product})