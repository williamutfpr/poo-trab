import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";

export default interface IEvent {
    // --- READ ---
    listEvents(): Event[];
    listAsyncEvents(): AsyncEvent[];
    listOnSiteEvents(): OnSiteEvent[];

    // --- Participants ---
    addParticipant(participant: Participant, event: Event): void;
    // removeParticipant(participant: Participant, event: Event): void;

    // --- Speakers ---
    addSpeaker(speaker: Speaker, event: Event): void;
    removeSpeaker(speaker: Speaker, event: Event): void;
}
