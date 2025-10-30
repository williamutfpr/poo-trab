"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventJest_1 = __importDefault(require("./EventJest"));
class MockOrganizerService {
    createEvent(id, type, name, time, maxParticipants, field, status, arg8) {
        return {
            id,
            type,
            name,
            time,
            maxParticipants,
            field,
            status,
            arg8,
            getName() {
                return name;
            },
        };
    }
}
const org = new MockOrganizerService();
const eventJest = new EventJest_1.default();
test("teste de criação de evento assíncrono", () => {
    const event = eventJest.testEventCreate(org);
    expect(event.getName()).toBe("Workshop de TypeScript");
});
