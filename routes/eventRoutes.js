const express = require('express');
const { createEvent, joinEvent, removeParticipant, viewParticipants } = require('../controllers/eventController');
const router = express.Router();

// Create an Event
router.post('/create', createEvent);

// Join an Event
router.post('/join', joinEvent);

// Remove a Participant
router.post('/remove', removeParticipant);

// View Participants (Confirmed & Waitlist)
router.get('/:eventId/participants', viewParticipants);

module.exports = router;
