const express = require('express');
const mongoose = require('mongoose');

const Contact_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    guestCount: { type: String, required: true },
    eventDetails: { type: String, required: true },
    location: { type: String, required: true },
    eventDate: { type: String, required: true },
    services: {
        type: [String],
        enum: ['Photography', 'Films', 'Both Photography and Films'],
        required: true
    },
}, { timestamps: true });

const contactModel = mongoose.model('contacts_data', Contact_Schema);

module.exports = contactModel;
    