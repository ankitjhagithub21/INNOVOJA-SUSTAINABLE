const About = require('../models/about');

const createAbout = async (req, res) => {
    try {
        const aboutExists = await About.findOne({});
        if (aboutExists) {
            return res.status(400).json({
                success: false,
                message: "About section already exists."
            });
        }

        const { title, paragraphs } = req.body;

        if (!title || !paragraphs || !Array.isArray(paragraphs)) {
            return res.status(400).json({
                success: false,
                message: "Title and paragraphs are required."
            });
        }

        const newAbout = new About({ title, paragraphs });
        await newAbout.save();

        res.status(201).json({
            success: true,
            message: "About section created.",
            about: newAbout
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateAbout = async (req, res) => {
    try {
        const { title, paragraphs } = req.body;

        const about = await About.findOne({});
        if (!about) {
            return res.status(404).json({
                success: false,
                message: "About section not found."
            });
        }

        about.title = title || about.title;
        about.paragraphs = paragraphs || about.paragraphs;

        await about.save();

        res.status(200).json({
            success: true,
            message: "About section updated.",
            about
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getAbout = async (req, res) => {
    try {
        const about = await About.findOne({});

        if (!about) {
            return res.status(404).json({
                success: false,
                message: "About section not found."
            });
        }

        res.status(200).json({
            success: true,
            about
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createAbout,
    updateAbout,
    getAbout
};
