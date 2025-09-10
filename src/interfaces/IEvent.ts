import Database from "../db/Database";
import { StatusEnum } from "../Enum/StatusEnum";
import Event from "../model/Event";
import Participant from "../model/Participant";

export default interface IEvent {
    //CREATE
    createEvent(name: string, time: number, maxParticipants: number, field: string, status: StatusEnum): Event
    //READ
    listEvents(): Event[]
    
    addParticipant(database: Database,participant: Participant): void

    removeParticipant(database: Database, participant: Participant): void
}
