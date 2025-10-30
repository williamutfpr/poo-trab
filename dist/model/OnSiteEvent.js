"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnSiteEvent = void 0;
const Event_1 = require("./Event");
class OnSiteEvent extends Event_1.Event {
    address;
    constructor(id, type, name, time, maxParticipants, field, status, address) {
        super(id, type, name, time, maxParticipants, field, status);
        this.address = address;
    }
    // --- Address ---
    setAddress(address) {
        this.address = address;
    }
    getLocal() {
        return this.address;
    }
    // sobrecarga --
    static getTypeEvent() {
        console.log("This is in-person event");
    }
}
exports.OnSiteEvent = OnSiteEvent;
