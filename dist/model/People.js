"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class People {
    id;
    name;
    cpf;
    mail;
    constructor(id, name, cpf, mail) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.mail = mail;
    }
    getId() {
        return this.id;
    }
    static setId() {
        return (0, crypto_1.randomInt)(1, 100000000);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getMail() {
        return this.mail;
    }
    setMail(mail) {
        this.mail = mail;
    }
}
exports.default = People;
