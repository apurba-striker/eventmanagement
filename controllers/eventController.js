const { Event, events } = require('../models/eventModel');
const { handleErrors } = require('../utils/errorHandling');

// Create Event
const createEvent = (req, res) => {
    const { title, description, date, time, location, maxParticipants } = req.body;
    const newEvent = new Event(title, description, date, time, location, maxParticipants);
    events.push(newEvent);
    res.status(201).json(newEvent);
};

// Join Event
const joinEvent = (req, res) => {
    try {
        const { eventId, userId } = req.body;
        const event = events.find(e => e.id === eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        const result = event.addParticipant(userId);
        res.status(200).json(result);
    } catch (error) {
        handleErrors(res, error);
    }
};

// Remove Participant
const removeParticipant = (req, res) => {
    try {
        const { eventId, userId } = req.body;
        const event = events.find(e => e.id === eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        const result = event.removeParticipant(userId);
        res.status(200).json(result);
    } catch (error) {
        handleErrors(res, error);
    }
};

// View Participants
const viewParticipants = (req, res) => {
    const { eventId } = req.params;
    const event = events.find(e => e.id === eventId);
    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event.viewParticipants());
};

module.exports = { createEvent, joinEvent, removeParticipant, viewParticipants };
