"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// service/OrganizerService.ts
const Organizer_1 = __importDefault(require("../model/Organizer"));
const AsyncEvent_1 = require("../model/AsyncEvent");
const OnSiteEvent_1 = require("../model/OnSiteEvent");
const Database_1 = __importDefault(require("../db/Database"));
const Address_1 = __importDefault(require("../model/Address"));
class OrganizerService {
    db = Database_1.default.getInstance();
    speakers = [];
    // --- Organizer ---
    createOrganizer(id, name, cpf, sector, email) {
        const organizer = new Organizer_1.default(id, name, cpf, sector, email);
        this.db.insertNewOrganizer(organizer);
        return organizer;
    }
    getAllOrganizers() {
        return this.db.getAllOrganizers();
    }
    removeOrganizer(organizer) {
        return this.db.removeOrganizer(organizer);
    }
    // --- Event ---
    createEvent(id, type, name, time, maxParticipants, field, status, optional) {
        let event;
        if (optional instanceof Address_1.default) {
            event = new OnSiteEvent_1.OnSiteEvent(id, type, name, time, maxParticipants, field, status, optional);
        }
        else {
            event = new AsyncEvent_1.AsyncEvent(id, type, name, time, maxParticipants, field, status, optional);
        }
        this.db.insertNewEvent(event);
        return event;
    }
    addSpeakerInEvent(event, speaker) {
        this.db.insertSpeakerInEvent(event, speaker);
        return event;
    }
    removeEvent(event) {
        return this.db.removeEvent(event);
    }
    // --- Address helper ---
    createAddress(rua, numero, city, state, zip) {
        return new Address_1.default(rua, numero, city, state, zip);
    }
    searchSpeaker(criteria) {
        if (typeof criteria === 'string') {
            return this.speakers.filter(s => s.getName().includes(criteria));
        }
        else {
            return this.speakers.filter(s => s.getId() === criteria);
        }
    }
}
exports.default = OrganizerService;
