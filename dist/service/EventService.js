"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const AsyncEvent_1 = require("../model/AsyncEvent");
const OnSiteEvent_1 = require("../model/OnSiteEvent");
class EventService {
    events = [];
    db;
    constructor() {
        this.db = Database_1.default.getInstance();
    }
    // --- READ ---
    listEvents() {
        return this.events;
    }
    listAsyncEvents() {
        return this.events.filter(e => e instanceof AsyncEvent_1.AsyncEvent);
    }
    listOnSiteEvents() {
        return this.events.filter(e => e instanceof OnSiteEvent_1.OnSiteEvent);
    }
    // --- Participants ---
    addParticipant(participant, event) {
        if (event.addParticipant(participant)) {
            this.db.createNewParticipant(participant);
        }
    }
    // public removeParticipant(participant: Participant, event: Event): void {
    //     if (event.removeParticipant(participant)) {
    //         this.db.removeParticipant(participant);
    //     }
    // }
    // --- Speakers ---
    addSpeaker(speaker, event) {
        if (event.addSpeaker(speaker)) {
            this.db.insertNewSpeaker(speaker);
        }
    }
    removeSpeaker(speaker, event) {
        if (event.removeSpeaker(speaker)) {
            this.db.removeSpeaker(speaker);
        }
    }
    searchEvent(criteria) {
        if (typeof criteria === 'string') {
            return this.events.filter(e => e.getName().includes(criteria));
        }
        else {
            return this.events.filter(e => e.getStatus === criteria);
        }
    }
}
exports.default = EventService;
