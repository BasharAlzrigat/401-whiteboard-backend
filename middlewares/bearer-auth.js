'use strict';

const { userModel } = require('../models/index');

module.exports = async (req, res, next) => {

  
  console.log("@@@@@@@@@@@@@@@@@@@",req.headers);
  try {
    if (!req.headers.authorization) { _authError() }
    const token = req.headers.authorization.split(' ').pop();
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!", token);
    const validUser = await userModel.authenticateToken(token);
    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    _authError();
  }

  function _authError() {
    next('Invalid Login');
  }
}