const express = require('express')
const { getTeamMembers, addNewMember, removeMember, updateMember } = require('../controllers/teamController')
const isAuthenticated = require('../middlewares/isAuthenticated')
const teamRouter = express.Router()

teamRouter.get("/members",getTeamMembers)
teamRouter.post("/add",isAuthenticated,addNewMember)
teamRouter.delete("/member/:id",isAuthenticated,removeMember)
teamRouter.put("/member/:id",isAuthenticated,updateMember)

module.exports = teamRouter