import Database from "../db/Database";
import { StatusEnum } from "../Enum/StatusEnum";
import Address from "../model/Address";
import Event from "../model/Event";
import Organizer from "../model/Organizer";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";

export default interface IEvent {
    //CREATE
    createEvent(name: string, time: number, maxParticipants: number, field: string, status: StatusEnum, address: Address, organizer: Organizer): Event
    //READ
    listEvents(): Event[]

    addParticipant(database: Database, participant: Participant, event: Event): void
    removeParticipant(database: Database, participant: Participant, event: Event): void

    addSpeaker(database: Database, speaker: Speaker, event: Event): void
    removeSpeaker(database: Database, speaker: Speaker, event: Event): void


}
