import Event from "../model/Event";
import Database from "../db/Database";
import Participant from "../model/Participant";
import IEvent from "../interfaces/IEvent";
import { StatusEnum } from "../Enum/StatusEnum";


export default class EventService  implements IEvent {
    private events: Event[] = [];

    public createEvent(name: string, time: number, maxParticipants: number, field: string, status: StatusEnum): Event {
        const event = new Event(name, time, maxParticipants, field,status);
        this.events.push(event);
        return event;                                                       
    }

    public listEvents(): Event[] {
        return this.events;
    }

    public addParticipant(database: Database,participant: Participant): void {
        return  database.insertNewParticipant(participant)
    }

    public removeParticipant(database: Database, participant: Participant): boolean {
    return database.removeParticipant(participant);

    }
}
