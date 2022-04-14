module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Filters',
      [
        {
          name: 'Andres',
          data: '{"firstName":{"filter":"Andres","filterType":"text","type":"contains"}}',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lionel',
          data: '{"firstName":{"filter":"Lio","filterType":"text","type":"contains"}}',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Filters', null, {});
  },
};