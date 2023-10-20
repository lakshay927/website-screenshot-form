const express = require("express");
const { getList, form } = require("../controllers/form");

const router = express.Router();

//list
router.route("/list").get(getList);

//form
router.route("/form").post(form);

module.exports = router;
