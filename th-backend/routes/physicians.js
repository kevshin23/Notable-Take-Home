const express = require('express');

const router = express.Router();

const Physician = require('../models/Physician');

router.get('/', async(req, res) => {
    console.log(req.body);
    try {
        const physicians = await Physician.find();
        res.send(physicians);
    } catch (err) {
        res.json({message: err});
    }
    
});

router.post('/newPhysician', async(req, res) => {
    console.log(req.body);
    const post = new Physician({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        appointments: req.body.appointments
    })

    try {
        const data = post.save()
        res.json(data);
    } catch (err) {
        res.json({ message: err})
    }
    
})

module.exports = router;