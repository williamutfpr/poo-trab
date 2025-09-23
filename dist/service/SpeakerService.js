"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Speaker_1 = __importDefault(require("../model/Speaker"));
const Database_1 = __importDefault(require("../db/Database"));
class SpeakerService {
    db = Database_1.default.getInstance();
    createSpeaker(id, name, cpf, mail, practice_area) {
        const speaker = new Speaker_1.default(id, name, cpf, mail, practice_area);
        this.db.createNewSpeaker(speaker);
        return speaker;
    }
    listSpeakers() {
        this.db.getAllSpeakers();
    }
}
exports.default = SpeakerService;
