module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Students',
      [
        {
          firstName: 'Andres',
          lastName: 'Ledesma',
          username: 'andreslh',
          schoolName: 'School 123',
          license: 'licensed',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Lionel',
          lastName: 'Messi',
          username: 'lmessi',
          schoolName: 'School 345',
          license: 'not licensed',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Students', null, {});
  },
};