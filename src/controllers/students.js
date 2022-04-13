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

const put = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findOne({ where: { id } })
      .then(function(student) {
        if(student)
          return student.update({ ...req.body });
      });

    if (student) {
      return res.sendStatus(200);
    }
    throw new Error('Student not found');
  } catch (error) {
    // TODO: handle errors properly
    return res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Student.destroy({ where: { id } });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Student not found');
  } catch (error) {
    // TODO: handle errors properly
    return res.status(500).send(error.message);
  }
};

module.exports = {
  get,
  post,
  put,
  remove
};