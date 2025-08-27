import Event from "../model/Event";
import Database from "../db/Database";
export default class EventService {
    constructor() {
        this.events = [];
    }
    createEvent(name, time, maxParticipants, currentParticipants, field) {
        const event = new Event(name, time, maxParticipants, currentParticipants, field);
        this.events.push(event);
        return event;
    }
    listEvents() {
        return this.events;
    }
    addParticipant(database, participant) {
        const p = database.insertNewParticipant(participant);
        return p;
    }
}
