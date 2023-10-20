const UserModel = require("../models/form");

//list of enteries
const getList = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

//form 
const form = async (req, res) => {
  try {
    const data = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      websiteURL: req.body.websiteURL,
      imageURL: req.body.imageURL,
    });
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

module.exports = {
  getList,
  form,
};
