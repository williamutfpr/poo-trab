"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class Participant extends People_1.default {
    enrollmentId; // inscrição
    constructor(id, name, cpf, endereco, enrollmentId, mail) {
        super(id, name, cpf, endereco, mail);
        this.enrollmentId = enrollmentId;
    }
    getInscricaoId() {
        return this.enrollmentId;
    }
}
exports.default = Participant;
