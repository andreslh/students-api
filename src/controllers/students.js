const { Student } = require('../models');

const get = async (req, res) => {
  try {
    const students = await Student.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ students });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  get,
};