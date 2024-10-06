const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    try {
        const event = new Event({
            ...req.body,
            createdBy: req.user.id,
        });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
