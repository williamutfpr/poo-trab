"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrganizerController {
    service;
    constructor(service) {
        this.service = service;
    }
    // --- Organizer ---
    createOrganizer(id, name, cpf, sector, email) {
        return this.service.createOrganizer(id, name, cpf, sector, email);
    }
    getAllOrganizers() {
        return this.service.getAllOrganizers();
    }
    // --- Event ---
    createEvent(id, type, name, time, maxParticipants, field, status, optional) {
        return this.service.createEvent(id, type, name, time, maxParticipants, field, status, optional);
    }
    // --- Address ---
    createAddress(rua, numero, city, state, zip) {
        return this.service.createAddress(rua, numero, city, state, zip);
    }
    // --- Speaker
    addSpeakerinEvent(event, speaker) {
        return this.service.addSpeakerInEvent(event, speaker);
    }
}
exports.default = OrganizerController;
