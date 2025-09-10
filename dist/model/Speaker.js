"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class Speaker extends People_1.default {
    practice_area;
    constructor(id, name, cpf, address, practice_area, mail) {
        super(id, name, cpf, address, mail);
        this.practice_area = practice_area;
    }
    getPractice_area() {
        return this.practice_area;
    }
    setPractice_area(value) {
        this.practice_area = value;
    }
}
exports.default = Speaker;
