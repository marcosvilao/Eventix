const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true
    },
    title: {                  
      type: DataTypes.STRING, 
      allowNull: false,
    },
    stars: {
      type: DataTypes.FLOAT, 
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING, 
      allowNull: false,
    }
  }, {
    timestamps: false
  });
};