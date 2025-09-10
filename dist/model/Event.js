"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    name;
    time;
    maxParticipants;
    list;
    field;
    status;
    constructor(name, time, maxParticipants, field, status) {
        this.name = name;
        this.time = time; // minutes
        this.maxParticipants = maxParticipants;
        this.list = [];
        this.field = field;
        this.status = status;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getTime() {
        return this.time;
    }
    setTime(time) {
        this.time = time;
    }
    getMaxParticipants() {
        return this.maxParticipants;
    }
    setMaxParticipants(maxParticipants) {
        this.maxParticipants = maxParticipants;
    }
    getCurrentParticipants() {
        return this.list.length;
    }
    getField() {
        return this.field;
    }
    setField(field) {
        this.field = field;
    }
    getList() {
        return this.list;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    toString() {
        return `${this.name} - ${this.time.toLocaleString()} | Participantes: ${this.list.length}/${this.maxParticipants}`;
    }
}
exports.default = Event;
