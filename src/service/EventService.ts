import Event from "../model/Event";
import Database from "../db/Database";
import Participant from "../model/Participant";
import IEvent from "../interfaces/IEvent";
import { StatusEnum } from "../Enum/StatusEnum";
import Address from "../model/Address";
import Speaker from "../model/Speaker";
import Organizer from "../model/Organizer";

export default class EventService implements IEvent {
    private events: Event[] = [];

    /**
     * Cria um novo evento e já armazena no EventService
     */
    public createEvent(
        name: string,
        time: number,
        maxParticipants: number,
        field: string,
        status: StatusEnum,
        address: Address,
        listO: Organizer
    ): Event {
        const event = new Event(name, time, maxParticipants, field, status, address);
        this.events.push(event);

        // opcional: já salvar também no Database global
        const db = Database.getInstance();
        db.insertNewEvent(event);
        
        return event;
    }

    /**
     * Lista eventos armazenados no EventService
     */
    public listEvents(): Event[] {
        return this.events;
    }

    /**
     * Adiciona um participante ao evento e registra no Database
     */
    public addParticipant( database: Database, participant: Participant, event: Event ): void {
        const added = event.addParticipant(participant);
        if (added) {
            // registra participante no DB global
            database.insertNewParticipant(participant);
        } else {
            console.log(
                "Não foi possível adicionar participante (já existe ou evento cheio)."
            );
        }
    }

    /**
     * Remove um participante do evento e do Database
     */
    public removeParticipant(database: Database, participant: Participant, event: Event): void {
        const removed = event.removeParticipant(participant);
        if (removed) {
            database.removeParticipant(participant);
        } else {
            console.log("Participante não encontrado no evento.");
        }
    }

    /**
     * Adiciona um palestrante ao evento e registra no Database
     */
    public addSpeaker(database: Database, speaker: Speaker, event: Event): void {
        const added = event.addSpeaker(speaker);
        if (added) {
            database.insertNewSpeaker(speaker);
        } else {
            console.log("Palestrante já está adicionado a este evento.");
        }
    }

    /**
     * Remove um palestrante do evento e do Database
     */
    public removeSpeaker(database: Database, speaker: Speaker, event: Event): void {
        const removed = event.removeSpeaker(speaker);
        if (removed) {
            database.removeSpeaker(speaker);
        } else {
            console.log("Palestrante não encontrado no evento.");
        }
    }
}
