"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const crypto_1 = require("crypto");
//
class Event {
    id;
    type;
    name;
    time;
    maxParticipants;
    listP;
    listS;
    listO;
    field;
    status;
    address;
    link;
    constructor(id, type, name, time, maxParticipants, field, status) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.time = time; // minutes
        this.maxParticipants = maxParticipants;
        this.listP = [];
        this.listS = [];
        this.listO = [];
        this.field = field;
        this.status = status;
    }
    // --- id ---
    getId() {
        return this.id;
    }
    static setId() {
        return (0, crypto_1.randomInt)(1, 100000000);
    }
    // --- Types ---
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    // --- Name ---
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    // --- Time ---
    getTime() {
        return this.time;
    }
    setTime(time) {
        this.time = time;
    }
    // --- Max Participants ---
    getMaxParticipants() {
        return this.maxParticipants;
    }
    setMaxParticipants(maxParticipants) {
        this.maxParticipants = maxParticipants;
    }
    getCurrentParticipants() {
        return this.listP.length;
    }
    // --- Field ---
    getField() {
        return this.field;
    }
    setField(field) {
        this.field = field;
    }
    // --- Status ---
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    // --- Address ---
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    // --- Address ---
    getLink() {
        return this.link;
    }
    setLink(link) {
        this.link = link;
    }
    // --- Participants ---
    getParticipants() {
        return this.listP;
    }
    addParticipant(p) {
        if (this.listP.length < this.maxParticipants && !this.listP.includes(p)) {
            this.listP.push(p);
            return true;
        }
        return false; // evento cheio ou já existe
    }
    // --- Speakers ---
    getSpeakers() {
        return this.listS;
    }
    addSpeaker(s) {
        if (!this.listS.includes(s)) {
            this.listS.push(s);
            return true;
        }
        return false;
    }
    removeSpeaker(s) {
        const index = this.listS.indexOf(s);
        if (index !== -1) {
            this.listS.splice(index, 1);
            return true;
        }
        return false;
    }
    // --- Organizers ---
    getOrganizers() {
        return this.listO;
    }
    pushOrganizers(o) {
        if (!this.listO.includes(o)) {
            this.listO.push(o);
            return true;
        }
        return false;
    }
    // sobrecarga --
    getEvent() {
        console.log("This is a hybrid event");
    }
}
exports.Event = Event;
