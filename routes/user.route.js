"use strict";
const express = require("express");
const userRoutes = express.Router();
const { userModel } = require("../models/index");
const basicAuth = require("../middlewares/basic-auth");
// const bearerAuth = require("../middlewares/bearer-auth");

userRoutes.post("/signup", signUp);
userRoutes.post("/signin", basicAuth, signIn);

async function signUp(req, res, next) {
  try {
    let userRecord = await userModel.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message);
  }
}
async function signIn(req, res) {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
}

module.exports = userRoutes;
