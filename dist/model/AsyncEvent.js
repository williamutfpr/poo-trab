"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncEvent = void 0;
const Event_1 = require("./Event");
class AsyncEvent extends Event_1.Event {
    constructor(id, type, name, time, maxParticipants, field, status, link) {
        super(id, type, name, time, maxParticipants, field, status);
        this.link = link;
    }
}
exports.AsyncEvent = AsyncEvent;
