const { v4: uuidv4 } = require('uuid');

class Event {
    constructor(title, description, date, time, location, maxParticipants) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
        this.location = location;
        this.maxParticipants = maxParticipants;
        this.confirmed = [];
        this.waitlist = [];
    }

    // Add participant to event
    addParticipant(userId) {
        if (this.confirmed.length < this.maxParticipants) {
            this.confirmed.push(userId);
            return { status: 'confirmed', userId };
        } else {
            this.waitlist.push(userId);
            return { status: 'waitlist', userId };
        }
    }

    // Remove participant and adjust confirmed/waitlist
    removeParticipant(userId) {
        if (this.confirmed.includes(userId)) {
            this.confirmed = this.confirmed.filter(id => id !== userId);
            if (this.waitlist.length > 0) {
                const nextUser = this.waitlist.shift();
                this.confirmed.push(nextUser);
                return { removed: userId, movedFromWaitlist: nextUser };
            }
            return { removed: userId };
        } else if (this.waitlist.includes(userId)) {
            this.waitlist = this.waitlist.filter(id => id !== userId);
            return { removed: userId };
        } else {
            throw new Error('User not found in either list');
        }
    }

    // View confirmed and waitlist participants
    viewParticipants() {
        return {
            confirmed: this.confirmed,
            waitlist: this.waitlist
        };
    }
}

const events = [];

module.exports = { Event, events };
