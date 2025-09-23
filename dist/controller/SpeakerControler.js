"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpeakerControler {
    service;
    constructor(service) {
        this.service = service;
    }
    createSpeaker(id, name, cpf, mail, practice_area) {
        return this.service.createSpeaker(id, name, cpf, mail, practice_area);
    }
    listSpeakers() {
        this.service.listSpeakers();
    }
}
exports.default = SpeakerControler;
