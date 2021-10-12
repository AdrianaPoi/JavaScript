const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  models.user
    .create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    })
    .then((submitedUser) => res.send(submitedUser));

  let user = await models.user.findOne({ where: { email: req.body.email } });
  if (user) return res.status(400).send("User already exists...");

  const jwtSecretKey = process.env.SECRET_KEY;
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    jwtSecretKey
  );

  res.send(token);
});

module.exports = router;
