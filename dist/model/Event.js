"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const crypto_1 = require("crypto");
const PeopleManager_1 = require("./PeopleManager");
class Event {
    id;
    type;
    name;
    time;
    maxParticipants;
    participants;
    speakers;
    organizers;
    field;
    status;
    constructor(id, type, name, time, maxParticipants, field, status) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.time = time;
        this.maxParticipants = maxParticipants;
        this.field = field;
        this.status = status;
        this.participants = new PeopleManager_1.PersonManager(this.maxParticipants);
        this.speakers = new PeopleManager_1.PersonManager();
        this.organizers = new PeopleManager_1.PersonManager();
    }
    getId() {
        return this.id;
    }
    static setId() {
        return (0, crypto_1.randomInt)(1, 100000000);
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
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
        // Idealmente, você também atualizaria o 'maxSize' no PersonManager aqui.
    }
    getCurrentParticipants() {
        return this.participants.getCount();
    }
    getField() {
        return this.field;
    }
    setField(field) {
        this.field = field;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getParticipants() {
        return this.participants.getList();
    }
    addParticipant(p) {
        return this.participants.add(p);
    }
    removeParticipant(p) {
        return this.participants.remove(p);
    }
    getSpeakers() {
        return this.speakers.getList();
    }
    addSpeaker(s) {
        return this.speakers.add(s);
    }
    removeSpeaker(s) {
        return this.speakers.remove(s);
    }
    getOrganizers() {
        return this.organizers.getList();
    }
    addOrganizer(o) {
        return this.organizers.add(o);
    }
    removeOrganizers(o) {
        return this.organizers.remove(o);
    }
    getTypeEvent() {
        console.log("hybrid event");
    }
}
exports.Event = Event;
