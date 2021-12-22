const mongoose = require('mongoose');
const Physician = require('../models/Physician');

const AppointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now,
        required: true
    },
    kind: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema);