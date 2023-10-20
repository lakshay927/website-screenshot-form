const express = require("express");
const { getList, form } = require("../controllers/form");

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});
const upload = multer({ storage: storage });

//list
router.route("/list").get(getList);

//form
router.post("/form", upload.single("imageURL"), form);

module.exports = router;
