"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    static instance;
    events = [];
    organizers = [];
    participants = [];
    speakers = [];
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    // --- Event ---
    insertNewEvent(event) {
        this.events.push(event);
    }
    getAllEvents() {
        return this.events;
    }
    removeEvent(event) {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
            return true;
        }
        return false;
    }
    // --- Organizer ---
    insertNewOrganizer(organizer) {
        this.organizers.push(organizer);
    }
    getAllOrganizers() {
        return this.organizers;
    }
    removeOrganizer(organizer) {
        const index = this.organizers.indexOf(organizer);
        if (index !== -1) {
            this.organizers.splice(index, 1);
            return true;
        }
        return false;
    }
    // --- Participant ---
    insertNewParticipant(participant) {
        this.participants.push(participant);
    }
    getAllParticipants() {
        return this.participants;
    }
    removeParticipant(participant) {
        const index = this.participants.indexOf(participant);
        if (index !== -1) {
            this.participants.splice(index, 1);
            return true;
        }
        return false;
    }
    // --- Speaker ---
    insertNewSpeaker(speaker) {
        this.speakers.push(speaker);
    }
    getAllSpeakers() {
        return this.speakers;
    }
    removeSpeaker(speaker) {
        const index = this.speakers.indexOf(speaker);
        if (index !== -1) {
            this.speakers.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.default = Database;
