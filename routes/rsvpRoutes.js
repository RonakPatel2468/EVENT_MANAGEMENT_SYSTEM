const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createRSVP, getUserRSVPs, cancelRSVP } = require('../controllers/rsvpController');

const router = express.Router();


router.post('/create', authMiddleware, createRSVP);

// Get all RSVPs for the authenticated user
router.get('/myrsvps', authMiddleware, getUserRSVPs);

// Cancel an RSVP by ID
router.delete('/:rsvpId', authMiddleware, cancelRSVP);

module.exports = router;
