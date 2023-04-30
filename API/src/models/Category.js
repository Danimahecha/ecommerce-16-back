const{DataTypes}= require('sequelize')
module.exports=(sequelize)=>{
sequelize.define('Category',{
    id:{
type: DataTypes.INTEGER,
primaryKey: true,
autoIncremeten:true,
allowNull: false
    },
    categoryName:{
type: DataTypes.STRING,
allowNull: false
    },
    
    typeName:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
}