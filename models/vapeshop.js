'use strict';
module.exports = (sequelize, DataTypes) => {
  var VapeShop = sequelize.define('VapeShop', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    avatar: DataTypes.STRING,
    background: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    user_id: {type: DataTypes.BIGINT, foreignKey: true}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        VapeShop.belongsTo(models.User, {foreignKey:'user_id'})
      }
    }
  });
  return VapeShop;
};