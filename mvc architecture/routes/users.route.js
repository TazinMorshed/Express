const express = require("express");
const router = express.Router();
const path = require("path");

const {
  getAllUsers,
  createUsers,
  getOneUsers,
  deleteUsers,
  updateUsers,
} = require("../controllers/user.controllers");

// short routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
});

router.post("/", (req, res) => {
  const name = req.body.Name;
  const id = req.body.NSUID;
  res.send(`<h2>${name} and ${id}</h2>`);
});

router.get("/create", createUsers);
router.get("/getOne", getOneUsers);
router.get("/delete", deleteUsers);
router.get("/update", updateUsers);

module.exports = router;
