'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VapeShops', [{
      name: "BestPar",
      description: 'rly bes fckng par',
      lat: null,
      lng: null,
      background: null,
      avatar: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 4
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};