"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSiteEvent = void 0;
const Event_1 = require("./Event");
class OnSiteEvent extends Event_1.Event {
    constructor(id, type, name, time, maxParticipants, field, status, address) {
        super(id, type, name, time, maxParticipants, field, status);
        this.address = address;
    }
}
exports.OnSiteEvent = OnSiteEvent;
