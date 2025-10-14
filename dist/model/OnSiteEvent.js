"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSiteEvent = void 0;
const Event_1 = require("./Event");
class OnSiteEvent extends Event_1.Event {
    constructor(id, type, name, time, maxParticipants, field, status, address) {
        super(id, type, name, time, maxParticipants, field, status);
        this.address = address;
    }
    // sobrecarga --
    static getEvent() {
        console.log("This is in-person event");
    }
}
exports.OnSiteEvent = OnSiteEvent;
