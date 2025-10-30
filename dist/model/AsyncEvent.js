"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncEvent = void 0;
const Event_1 = require("./Event");
class AsyncEvent extends Event_1.Event {
    link;
    constructor(id, type, name, time, // in minutes
    maxParticipants, field, status, link) {
        super(id, type, name, time, maxParticipants, field, status);
        this.link = link;
    }
    getLocal() {
        return this.link;
    }
    // --- Address ---
    setLink(link) {
        this.link = link;
    }
    // sobrecarga ---
    static getTypeEvent() {
        console.log("This is an async event");
    }
}
exports.AsyncEvent = AsyncEvent;
