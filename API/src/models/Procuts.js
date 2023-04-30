const{DataTypes}= require('sequelize')
module.exports=(sequelize)=>{
sequelize.define('Products',{
    id:{
type: DataTypes.INTEGER,
primaryKey: true,
autoIncremeten:true,
allowNull: false
    },
    productName:{
type: DataTypes.STRING,
allowNull: false
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false
    },
    img2:{
        type: DataTypes.STRING,
        allowNull: false
    },
    img3:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
})
}