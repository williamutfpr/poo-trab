"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventController {
    service;
    constructor(service) {
        this.service = service;
    }
    // --- Listagem ---
    listEvents() {
        return this.service.listEvents();
    }
    listAsyncEvents() {
        return this.service.listAsyncEvents();
    }
    listOnSiteEvents() {
        return this.service.listOnSiteEvents();
    }
    // --- Participants ---
    addParticipant(participant, event) {
        this.service.addParticipant(participant, event);
    }
    // public removeParticipant(participant: Participant, event: Event): void {
    //   this.service.removeParticipant(participant, event);
    // }
    // --- Speakers ---
    addSpeaker(speaker, event) {
        this.service.addSpeaker(speaker, event);
    }
    removeSpeaker(speaker, event) {
        this.service.removeSpeaker(speaker, event);
    }
}
exports.default = EventController;
