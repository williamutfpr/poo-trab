"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParticipantController {
    service;
    constructor(service) {
        this.service = service;
    }
    createParticipant(id, name, cpf, mail, enrollmentId) {
        return this.service.createParticipant(id, name, cpf, mail, enrollmentId);
    }
    subscibeInEvent(e, p) {
        return this.service.subscribeInEvent(e, p);
    }
    getAllParticipants() {
        return this.service.getAllParticipants();
    }
}
exports.default = ParticipantController;
