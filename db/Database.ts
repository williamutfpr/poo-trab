import Event from "../src/model/Event";
import Organizer from "../src/model/Organizer";
import Participant from "../src/model/Participant";
import Speaker from "../src/model/Speaker";

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