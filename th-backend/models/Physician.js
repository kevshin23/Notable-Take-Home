const mongoose = require('mongoose');

const PhysicianSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    appointments: {
        type: Object
    }
})

module.exports = mongoose.model('Physician', PhysicianSchema);