import Database from "../db/Database";
import IEvent from "../interfaces/IEvent";

import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";
import { StatusEnum } from "../Enum/StatusEventEnum";

export default class EventService implements IEvent {
    private events: Event[] = [];
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    // --- READ ---
    public listEvents(): Event[] {
        return this.events;
    }

    public listAsyncEvents(): AsyncEvent[] {
        return this.events.filter(e => e instanceof AsyncEvent) as AsyncEvent[];
    }

    public listOnSiteEvents(): OnSiteEvent[] {
        return this.events.filter(e => e instanceof OnSiteEvent) as OnSiteEvent[];
    }

    // --- Participants ---
    public addParticipant(participant: Participant, event: Event): void {
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
    public addSpeaker(speaker: Speaker, event: Event): void {
        if (event.addSpeaker(speaker)) {
            this.db.insertNewSpeaker(speaker);
        }
    }

    public removeSpeaker(speaker: Speaker, event: Event): void {
        if (event.removeSpeaker(speaker)) {
            this.db.removeSpeaker(speaker);
        }
    }

    // sobrescrita
    searchEvent(name: string): Event[];
    searchEvent(date: Date): Event[];
    searchEvent(status: StatusEnum): Event[];

    searchEvent(
        criteria: string | Date | StatusEnum 
    ): Event[] {
        if (typeof criteria === 'string') {
            return this.events.filter(e => e.getName().includes(criteria));
        }
        if (criteria instanceof Date) {
            return this.events.filter(e => e.getTime() === criteria.getTime());
        }
        // StatusEnum
        return this.events.filter(e => e.getStatus === criteria);
    }   
}
