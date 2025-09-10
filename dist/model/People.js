"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    id;
    name;
    cpf;
    address;
    mail;
    constructor(id, name, cpf, address, mail) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.address = address;
        this.mail = mail;
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
    getAddress() {
        return this.address.getEnderecoCompleto();
    }
}
exports.default = People;
