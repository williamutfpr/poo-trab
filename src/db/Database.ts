// db/Database.ts
import Organizer from "../model/Organizer";
import { Event } from "../model/Event";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";
import { OnSiteEvent } from "../model/OnSiteEvent";
import { AsyncEvent } from "../model/AsyncEvent";

export default class Database {

    private static instance: Database;
    private organizers: Organizer[] = [];
    private events: Event[] = [];
    private participants: Participant[] = [];
    private speakers: Speaker[] = [];

    private constructor() { }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    // --- Organizers ---
    insertNewOrganizer(organizer: Organizer): void {
        this.organizers.push(organizer);
    }

    getAllOrganizers(): Organizer[] {
        return this.organizers;
    }

    removeOrganizer(organizer: Organizer): boolean {
        const index = this.organizers.indexOf(organizer);
        if (index !== -1) {
            this.organizers.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Events ---
    insertNewEvent(event: Event): void {
        this.events.push(event);
    }
    getAllEvents(): Event[] {
        return this.events;
    }
    removeEvent(event: Event): boolean {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Participants ---
    createNewParticipant(p: Participant): void {
        this.participants.push(p);
    }
    // removeParticipant(p: Participant): void {
    //     this.participants = this.participants.filter(x => x !== p);
    // }
    insertParticipantInEvent(e: Event, p: Participant): AsyncEvent | OnSiteEvent {
        // exemplo de lógica simples:
        if (e instanceof AsyncEvent) {
            e.addParticipant(p);
            return e; // AsyncEvent
        } else if (e instanceof OnSiteEvent) {
            e.addParticipant(p);
            return e; // OnSiteEvent
        } else {
            throw new Error("Tipo de evento não suportado");
        }
    }
    getAllParticipants(): Participant[] {
        return this.participants;
    }

    // --- Speakers ---
    createNewSpeaker(s: Speaker): void {
        this.speakers.push(s);
    }

    insertNewSpeaker(s: Speaker): void {
        this.speakers.push(s);
    }
    removeSpeaker(s: Speaker): void {
        this.speakers = this.speakers.filter(x => x !== s);
    }

    getAllSpeakers(): Speaker[] {
        return this.speakers;
    }

    insertSpeakerInEvent(e: Event, s: Speaker): void {
        e.addSpeaker(s)
    }

}
