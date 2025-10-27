const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

const Contact_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    guestCount: { type: String, required: true },
    aboutWedding: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    services: {
        type: String,
        enum: ['Photography', 'Films', 'Both Photography and Films'],
        required: true,
        default: []
    },
}, { timestamps: true });

const contactModel = mongoose.model(contacts-data, Contact_Schema);

module.exports = contactModel;
