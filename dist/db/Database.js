"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OnSiteEvent_1 = require("../model/OnSiteEvent");
const AsyncEvent_1 = require("../model/AsyncEvent");
class Database {
    static instance;
    organizers = [];
    events = [];
    participants = [];
    speakers = [];
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    // --- Organizers ---
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
    // --- Events ---
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
    // --- Participants ---
    createNewParticipant(p) {
        this.participants.push(p);
    }
    // removeParticipant(p: Participant): void {
    //     this.participants = this.participants.filter(x => x !== p);
    // }
    insertParticipantInEvent(e, p) {
        // exemplo de lógica simples:
        if (e instanceof AsyncEvent_1.AsyncEvent) {
            e.addParticipant(p);
            return e; // AsyncEvent
        }
        else if (e instanceof OnSiteEvent_1.OnSiteEvent) {
            e.addParticipant(p);
            return e; // OnSiteEvent
        }
        else {
            throw new Error("Tipo de evento não suportado");
        }
    }
    getAllParticipants() {
        return this.participants;
    }
    // --- Speakers ---
    createNewSpeaker(s) {
        this.speakers.push(s);
    }
    insertNewSpeaker(s) {
        this.speakers.push(s);
    }
    removeSpeaker(s) {
        this.speakers = this.speakers.filter(x => x !== s);
    }
    insertSpeakerInEvent(e, s) {
        e.addSpeaker(s);
    }
}
exports.default = Database;
