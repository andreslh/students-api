const { Filter } = require('../models');

const get = async (req, res) => {
  try {
    const filters = await Filter.findAll({ order: [['id', 'ASC']] });
    return res.status(200).json({ filters });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const post = async (req, res) => {
  try {
    const filter = await Filter.create({ ...req.body });
    return res.status(201).json({ filter });
  } catch (error) {
    // TODO: handle errors properly
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  post,
};
