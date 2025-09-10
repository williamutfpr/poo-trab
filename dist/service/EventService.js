"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../model/Event"));
class EventService {
    events = [];
    createEvent(name, time, maxParticipants, field, status) {
        const event = new Event_1.default(name, time, maxParticipants, field, status);
        this.events.push(event);
        return event;
    }
    listEvents() {
        return this.events;
    }
    addParticipant(database, participant) {
        return database.insertNewParticipant(participant);
    }
    removeParticipant(database, participant) {
        return database.removeParticipant(participant);
    }
}
exports.default = EventService;
