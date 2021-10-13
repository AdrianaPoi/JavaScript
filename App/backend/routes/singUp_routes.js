const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // models.user
  //   .create({
  //     id: req.body.id,
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: bcrypt.hashSync(req.body.password, 8),
  //   })
  //   .then((result) => {
  //     res.status(201).json({
  //       message: "User created successfully",
  //     });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({
  //       message: "Something went wrong!",
  //     });
  //   });
  try {
    let user = await models.user.findOne({ where: { email: req.body.email } });
    if (user) return res.status(400).send("User already exists...");

    const { name, email, password } = req.body;
    user = new models.user({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const savedUser = await user.save();
    if (!savedUser) throw Error("Something went wrong saving the user");

    const jwtSecretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { id: savedUser.id, name: user.name, email: user.email },
      jwtSecretKey
    );

    res.send(token);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
