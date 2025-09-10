import Event from "../model/Event";
import Organizer from "../model/Organizer";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";

export default class Database {
    private static instance: Database;

    private events: Event[] = [];
    private organizers: Organizer[] = [];
    private participants: Participant[] = [];
    private speakers: Speaker[] = [];

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    // --- Event ---
    public insertNewEvent(event: Event): void {
        this.events.push(event);
    }

    public getAllEvents(): Event[] {
        return this.events;
    }

    public removeEvent(event: Event): boolean {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Organizer ---
    public insertNewOrganizer(organizer: Organizer): void {
        this.organizers.push(organizer);
    }

    public getAllOrganizers(): Organizer[] {
        return this.organizers;
    }

    public removeOrganizer(organizer: Organizer): boolean {
        const index = this.organizers.indexOf(organizer);
        if (index !== -1) {
            this.organizers.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Participant ---
    public insertNewParticipant(participant: Participant): void {
        this.participants.push(participant);
    }

    public getAllParticipants(): Participant[] {
        return this.participants;
    }

    public removeParticipant(participant: Participant): boolean {
        const index = this.participants.indexOf(participant);
        if (index !== -1) {
            this.participants.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Speaker ---
    public insertNewSpeaker(speaker: Speaker): void {
        this.speakers.push(speaker);
    }

    public getAllSpeakers(): Speaker[] {
        return this.speakers;
    }

    public removeSpeaker(speaker: Speaker): boolean {
        const index = this.speakers.indexOf(speaker);
        if (index !== -1) {
            this.speakers.splice(index, 1);
            return true;
        }
        return false;
    }
}
