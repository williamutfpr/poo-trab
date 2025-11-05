"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FailEvent_1 = __importDefault(require("../Error/FailEvent"));
const OrganizerService_1 = __importDefault(require("../service/OrganizerService"));
const EventJest_1 = __importDefault(require("./EventJest"));
class JestTestCreateEventOnSite {
    createEvent(id, type, name, time, maxParticipants, field, status, arg8) {
        return {
            id,
            type,
            name,
            time,
            maxParticipants,
            field,
            status,
            arg8
        };
    }
}
exports.default = JestTestCreateEventOnSite;
const org = new OrganizerService_1.default;
const eventJest = new EventJest_1.default();
test("teste de criação de evento presencial", () => {
    try {
        const event = eventJest.testEventCreate(org);
        expect(event.getName()).toBe("Workshop de TypeScript");
    }
    catch (error) {
        throw new FailEvent_1.default("Fail to create Event");
    }
    finally {
        console.log("Test Finished");
    }
});
