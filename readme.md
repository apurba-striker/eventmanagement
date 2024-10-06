# Event Management System API

## Overview
This is a RESTful API for managing events, user participation, and handling waitlists. It allows admins to create events, users to join events (either as confirmed participants or waitlisted if the event is full), view participants, and handle cancellations, moving users from the waitlist to the confirmed list as space becomes available.

## Features
- **Event Creation**: Admins can create events with details such as title, description, date, time, location, and a maximum number of participants.
- **Joining Events**: Users can express interest in joining events. If the event's confirmed list has space, the user is added as a confirmed participant. If the list is full, the user is added to the waitlist.
- **Participant Management**: Users can view the confirmed list and waitlist for events. If a confirmed user cancels, the next user on the waitlist is moved to the confirmed list.
- **Error Handling**: Provides clear error messages when the confirmed list is full or when attempting to remove a user who is not on either list.

## Prerequisites
- **Node.js**: >= 12.x

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/apurba-striker/eventmanagement.git
   cd eventmanagement
   ```
2. Install the dependencies:

   ```bash
   npm install
   ``` 
3. Run the application:
   ```bash
   node index.js
    ``` 
4. The server will start at `http://localhost:3000.`

## API Endpoints

### 1. Create an Event
- **URL:** `/events/create`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Event Title",
    "description": "Event Description",
    "date": "YYYY-MM-DD",
    "time": "HH:MM",
    "location": "Event Location",
    "maxParticipants": 50
  }
  ```
### 2. **Join an Event**

- **URL**: `/events/join`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "eventId": "event-id",
    "userId": "user123"
  }
  ```

### 3. **Remove a Participant**

- **URL**: `/events/remove`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "eventId": "event-id",
    "userId": "user123"
  }
  ```
 
### 4. **View Participants**

- **URL**: `/events/:eventId/participants`
- **Method**: `GET`
- **Description**: Retrieve the list of confirmed participants and the waitlist for a specific event.

### Error Handling

- If the event's confirmed list is full, users attempting to join will be added to the waitlist:
  ```json
  {
    "message": "Confirmed list is full. You have been added to the waitlist."
  }
```