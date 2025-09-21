"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Participant {
    id;
    name;
    cpf;
    mail;
    enrollmentId;
    constructor(id, name, cpf, mail, enrollmentId) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.mail = mail;
        this.enrollmentId = enrollmentId;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getMail() {
        return this.mail;
    }
    getEnrollmentId() {
        return this.enrollmentId; // ✅ retorna o valor real
    }
}
exports.default = Participant;
