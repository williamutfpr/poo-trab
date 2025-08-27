import Event from "../model/Event";
import Database from "../../db/Database";
import type Participant from "../model/Participant";


export default class EventService {
    private events: Event[] = [];

    public createEvent(name: string, time: string, maxParticipants: number,currentParticipants: number, field: string): Event {
        const event = new Event(name, time, maxParticipants,currentParticipants, field);
        this.events.push(event);
        return event;
    }

    public listEvents(): Event[] {
        return this.events;
    }

    public addParticipant(database: Database,participant: Participant): void {
        const p = database.insertNewParticipant(participant)
        return p;
    }
}
