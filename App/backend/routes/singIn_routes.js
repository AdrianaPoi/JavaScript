const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const express = require("express");
const router = express.Router();
const config = require("../config/auth.config");

router.post("/", async (req, res) => {
  let user = await models.user.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(400).send("Invalid email");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password...");

  const jwtSecretKey = process.env.SECRET_KEY;
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    jwtSecretKey
  );

  res.send(token);
});

module.exports = router;
