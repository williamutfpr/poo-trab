import Event from "../src/model/Event";
import Organizer from "../src/model/Organizer";
import Participant from "../src/model/Participant";
import Speaker from "../src/model/Speaker";
export default class Database {
    constructor() {
        this.EventDB = [];
        this.OrganizerDb = [];
        this.ParticipantDb = [];
        this.SpeakerDb = [];
    }
    insertNewEvent(event) {
        this.EventDB.push(event);
    }
    getAllEvents() {
        return this.EventDB;
    }
    insertNewOrganizer(organizer) {
        this.OrganizerDb.push(organizer);
    }
    getAllOrganizer(organizer) {
        return this.OrganizerDb;
    }
    insertNewParticipant(participant) {
        this.ParticipantDb.push(participant);
    }
    getAllParticipant(participant) {
        return this.ParticipantDb;
    }
    insertNewSpeaker(speaker) {
        this.SpeakerDb.push(speaker);
    }
    getAllSpeaker(speaker) {
        return this.SpeakerDb;
    }
}
