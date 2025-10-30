"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusEventEnum_1 = require("../Enum/StatusEventEnum");
const Address_1 = __importDefault(require("../model/Address"));
const TypeEventEnum_1 = require("../Enum/TypeEventEnum");
class EventJest {
    testEventCreate(org) {
        const id = 1;
        const type = TypeEventEnum_1.TypeEventEnum.EAD;
        const name = "Workshop de TypeScript";
        const time = 120;
        const maxParticipants = 50;
        const field = "Programação";
        const status = StatusEventEnum_1.StatusEnum.IP;
        const link = "https://meet.example.com";
        const address = new Address_1.default("street", 0, "city", "state", "zip");
        const eventAsync = org.createEvent(id, type, name, time, maxParticipants, field, status, link);
        const eventOnSite = org.createEvent(id, type, name, time, maxParticipants, field, status, address);
        // ✅ Retorne o evento que quer testar
        return eventAsync;
    }
}
exports.default = EventJest;
