"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventService_1 = __importDefault(require("../service/EventService"));
class EventController {
    getNewEventService() {
        return new EventService_1.default();
    }
}
exports.default = EventController;
