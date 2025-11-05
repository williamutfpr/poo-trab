import Database from "../db/Database";
import IEvent from "../interfaces/IEvent";

import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";
import { StatusEnum } from "../Enum/StatusEventEnum";

export default class EventService implements IEvent {
    private events: Event<Participant>[] = [];
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    // --- READ ---
    public listEvents(): Event<Participant>[] {
        return this.events;
    }

    public listAsyncEvents(): AsyncEvent[] {
        return this.events.filter(events => events instanceof AsyncEvent) as AsyncEvent[];
    }

    public listOnSiteEvents(): OnSiteEvent[] {
        return this.events.filter(e => e instanceof OnSiteEvent) as OnSiteEvent[];
    }

    // --- Participants ---
    public addParticipant(participant: Participant, event: Event<Participant>): void {
        if (event.addParticipant(participant)) {
            this.db.createNewParticipant(participant);
        }
    }

    // --- Speakers ---
    public addSpeaker(speaker: Speaker, event: Event<Participant>): void {
        if (event.addSpeaker(speaker)) {
            this.db.insertNewSpeaker(speaker);
        }
    }

    // sobrescrita --
    searchEvent(name: string): Event<Participant>[];
    searchEvent(status: StatusEnum): Event<Participant>[];

    public searchEvent(criteria: string | StatusEnum): Event<Participant>[] {
        const events = this.db.getAllEvents();
        if (typeof criteria === "string") {
            return events.filter(e => e.getName().toLowerCase().includes(criteria.toLowerCase()));
        } else {
            return events.filter(e => e.getStatus() == criteria);
        }
    }

}
