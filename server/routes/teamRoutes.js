const express = require('express');
const { getTeamMembers, addNewMember, removeMember } = require('../controllers/teamController');
const isAdmin = require('../middlewares/isAdmin');
const isAuthenticated = require('../middlewares/isAuthenticated');
const teamRouter = express.Router();

teamRouter.get("/members", getTeamMembers);
teamRouter.post("/add", isAuthenticated, isAdmin, addNewMember);
teamRouter.delete("/member/:id", isAuthenticated, isAdmin, removeMember);

module.exports = teamRouter;
