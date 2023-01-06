const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('event', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    imageBanner: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    price: {
      type: DataTypes.ARRAY(DataTypes.JSONB), 
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    typeEvent: {
      type: DataTypes.JSONB, 
      allowNull: true,
    },
    createInDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull:false
    }
  },{
    timestamps: false
  });
};