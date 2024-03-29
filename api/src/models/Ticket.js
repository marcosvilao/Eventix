const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('ticket', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true
    },
    event: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    typeTicket: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // usersId: {
    //   type: DataTypes.INTEGER
    // },
    paymentMade: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull:false
    },
    pendingPayment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull:false
    },
    emailSent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull:false
    },
    invoiceTicketId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
    }
    // date: {
    //   type: DataTypes.STRING,
    //   // allowNull: false
    // },
    // description: {
    //   type: DataTypes.STRING, 
    //   allowNull: false,
    // },  
  },{
    timestamps: false
  });
};

//PREGUNTAR A ALFRED !!!!!