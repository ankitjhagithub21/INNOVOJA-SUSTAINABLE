const express = require('express');
const { createAbout, updateAbout, getAbout } = require('../controllers/aboutController');
const isAuthenticated = require('../middlewares/isAuthenticated');
const isAdmin = require('../middlewares/isAdmin');

const aboutRouter = express.Router();

aboutRouter.get('/', getAbout);

aboutRouter.post('/create', isAuthenticated, isAdmin, createAbout);

aboutRouter.put('/update', isAuthenticated, isAdmin, updateAbout);

module.exports = aboutRouter;
