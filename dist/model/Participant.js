"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class Participant extends People_1.default {
    enrollmentId;
    constructor(id, name, cpf, mail, enrollmentId) {
        super(id, name, cpf, mail);
        this.cpf = cpf;
        this.mail = mail;
        this.enrollmentId = enrollmentId;
    }
    getEnrollmentId() {
        return this.enrollmentId;
    }
}
exports.default = Participant;
