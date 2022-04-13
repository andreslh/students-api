const fs = require('fs');
let path = require('path');
const { Student } = require('../models');

const AVATAR_PATH = '../../public/img/students';

const deleteOldAvatar = (avatar) => {
  if (avatar) {
    fs.unlinkSync(path.join(__dirname, `${AVATAR_PATH}/${avatar}`));
  }
}

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
    const student = await Student.create({ ...req.body, avatar: req.file.filename });
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
        if(student) {
          if (req.file) {
            deleteOldAvatar(student.get({ plain: true }).avatar);
          }
          return student.update({ ...req.body, avatar: req.file.filename });
        }
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
    const students = await Student.findAll({ where: { id: req.body.ids } });
    
    if (students) {
      const deletedStudents = await Student.destroy({ where: { id: req.body.ids } });
      if (deletedStudents) {
        students.forEach((student) => deleteOldAvatar(student.get({ plain: true }).avatar));
        return res.status(204).send();
      }
    }
    throw new Error('Student/s not found');
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