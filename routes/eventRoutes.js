const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createEvent } = require('../controllers/eventController');

const router = express.Router();

// Create Event
router.post('/create', authMiddleware, createEvent);

module.exports = router;
