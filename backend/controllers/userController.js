const User = require("../model/userModel");

exports.home = (req, res) => {
  res.send("Hello World");
};

exports.aboutus = (req, res) => {
  res.send("About us");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("Name and email both are required");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("Email already exists");
    }

    const user = await User.create({ name, email });
    res.status(201).json({
      success: true,
      message: "User Created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
