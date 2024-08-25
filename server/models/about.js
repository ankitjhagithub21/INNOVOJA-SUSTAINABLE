const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    paragraphs: {
        type: [String], 
        required: true,
    }
},{versionKey:false});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
