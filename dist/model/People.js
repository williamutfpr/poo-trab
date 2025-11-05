"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = __importDefault(require("./Entity"));
class People extends Entity_1.default {
    cpf;
    mail;
    constructor(id, name, cpf, mail) {
        super(id, name);
        this.cpf = cpf;
        this.mail = mail;
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
