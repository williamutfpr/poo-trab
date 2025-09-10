"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class Organizer extends People_1.default {
    sector; // setor (TI,Pscico,Nutri ...)
    constructor(id, name, cpf, endereco, sector, mail) {
        super(id, name, cpf, endereco, mail);
        this.sector = sector;
    }
    getSector() {
        return this.sector;
    }
    setSector(value) {
        this.sector = value;
    }
}
exports.default = Organizer;
