"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const Participant_1 = __importDefault(require("../model/Participant"));
class ParticipantService {
    db = Database_1.default.getInstance();
    createParticipant(id, name, cpf, mail, enrollmentId) {
        const participant = new Participant_1.default(id, name, cpf, mail, enrollmentId);
        this.db.createNewParticipant(participant);
        return participant;
    }
    subscribeInEvent(e, p) {
        return this.db.insertParticipantInEvent(e, p);
    }
    getAllParticipants() {
        return this.db.getAllParticipants();
    }
}
exports.default = ParticipantService;
