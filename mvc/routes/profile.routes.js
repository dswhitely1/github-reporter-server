const profileRouter = require('express').Router();
const { findProfile } = require('../controllers/profile.controller');

profileRouter.get('/:user', findProfile);

module.exports = profileRouter;
