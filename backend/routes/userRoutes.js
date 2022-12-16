const express = require("express");
const { home, aboutus, createUser } = require("../controllers/userController");
const router = express.Router();

router.get("/", home);

router.get("/aboutus", aboutus);

router.post("/createUser", createUser);

module.exports = router;
