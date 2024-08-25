const Member = require("../models/member")

const getTeamMembers = async (req, res) => {
    try {
        const members = await Member.find({});

        if (!members) {
            return res.status(404).json({
                success: false,
                message: "Member not found."
            })
        }
        res.status(200).json({
            success: true,
            members
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const addNewMember = async (req, res) => {
    try {
        const { name, profilePic, role, url } = req.body;

        if (!req.user || !req.user.isAdmin) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized."
            })
        }


        if (!name || !profilePic || !role || !url) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const newMember = new Member({
            name,
            profilePic,
            role,
            url
        })

        await newMember.save()


        res.status(201).json({
            success: true,
            message: "Team member added.",
            member: newMember
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const removeMember = async (req, res) => {
    try {
        const { id } = req.params;

    
        if (!req.user || !req.user.isAdmin) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized."
            })
        }

        const member = await Member.findByIdAndDelete(id);
        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Member not found."
            })
        }

         res.status(200).json({
            success: true,
            message: "Member removed.",
           
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



module.exports = {
    getTeamMembers,
    addNewMember,
    removeMember
}
