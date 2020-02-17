const publicRouter = require('express').Router();
const profileRoutes = require('../../mvc/routes/profile.routes');

publicRouter.use('/profile', profileRoutes);

module.exports = publicRouter;
