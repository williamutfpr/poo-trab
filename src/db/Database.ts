import Event from "../model/Event";
import Organizer from "../model/Organizer";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";

export  default  class Database {

    private EventDB: Event[] = [];
    private OrganizerDb: Organizer[] = [];
    private ParticipantDb: Participant[] = [];
    private SpeakerDb: Speaker[] = [];


    public insertNewEvent(event: Event) {
        this.EventDB.push(event);
    }
    public getAllEvents(): Event[] {
        return this.EventDB;
    }

    public insertNewOrganizer(organizer: Organizer) {
        this.OrganizerDb.push(organizer)
    }
    public getAllOrganizer(organizer: Organizer) {
        return this.OrganizerDb;
    }

    public insertNewParticipant(participant: Participant) {
        this.ParticipantDb.push(participant);
    }
    public getAllParticipant(participant: Participant) {
        return this.ParticipantDb;
    }

    public insertNewSpeaker(speaker: Speaker) {
        this.SpeakerDb.push(speaker);
    }
    public getAllSpeaker(speaker: Speaker) {
        return this.SpeakerDb;
    }
}