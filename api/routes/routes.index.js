const indexRouter = require('express').Router();
const publicRoutes = require('./routes.public');

indexRouter.use('/api', publicRoutes);

module.exports = indexRouter;
