const express = require('express');

const router = express.Router();

const Appointment = require('../models/Appointment');

router.get('/', async(req, res) => {
    console.log(req.body);
    try {
        const apps = await Appointment.find();
        res.send(apps);
    } catch (err) {
        res.json({message: err});
    }
    
});

router.post('/newAppointment', async(req, res) => {
    console.log(req.body);
    const post = new Appointment({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        type: req.body.type,
        kind: req.body.kind,
    })

    try {
        const data = post.save()
        res.json(data);
    } catch (err) {
        res.json({ message: err})
    }
    
})

module.exports = router;