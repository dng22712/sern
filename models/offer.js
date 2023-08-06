'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    product_name: DataTypes.STRING,
    image_path: DataTypes.STRING,
    area_code: DataTypes.STRING,
    store_name: DataTypes.STRING,
    product_detail: DataTypes.STRING,
    offer_detail: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING
  }, {});
  Offer.associate = function(models) {
    // associations can be defined here
  };
  return Offer;
};