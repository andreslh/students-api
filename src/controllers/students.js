const { Student } = require('../models');

const get = async (req, res) => {
  try {
    const students = await Student.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ students });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const post = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    return res.status(201).json({ student });
  } catch (error) {
    // TODO: handle errors properly
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  post
};