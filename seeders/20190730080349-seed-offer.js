'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Offers', [{
          product_name: 'Apple',
          image_path: 'uploads/1564462494725Data_Analyzer2.jpg',
          area_code: 'area123',
          store_name: 'store abc',
          product_detail: '50 Rs',
          offer_detail: '30% 35 Rs',
          start_date: '2017-05-11',
          end_date: '2017-05-24',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
            product_name: 'Banana',
          image_path: 'uploads/1564462660709Data_Analyzer2.jpg',
          area_code: 'area456',
          store_name: 'store def',
          product_detail: '25 Rs',
          offer_detail: '10% 22.5 Rs',
          start_date: '2017-06-11',
          end_date: '2017-06-24',
          createdAt: new Date(),
          updatedAt: new Date()
         }, {
          product_name: 'grape',
          image_path: 'uploads/1564473102471Data_Analyzer2.jpg',
          area_code: 'area789',
          store_name: 'store ghi',
          product_detail: '70 Rs',
          offer_detail: '10% 63 Rs',
          start_date: '2017-07-11',
          end_date: '2017-07-24',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Offers', null, {});
  }
};
