"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// controller/MainController.ts
const Database_1 = __importDefault(require("../db/Database"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
const EventController_1 = __importDefault(require("./EventController"));
const OrganizerController_1 = __importDefault(require("./OrganizerController"));
const ParticipantController_1 = __importDefault(require("./ParticipantController"));
const SpeakerControler_1 = __importDefault(require("./SpeakerControler"));
const EventService_1 = __importDefault(require("../service/EventService"));
const OrganizerService_1 = __importDefault(require("../service/OrganizerService"));
const ParticipantService_1 = __importDefault(require("../service/ParticipantService"));
const SpeakerService_1 = __importDefault(require("../service/SpeakerService"));
class MainController {
    db;
    ec;
    oc;
    pc;
    sc;
    constructor() {
        this.db = Database_1.default.getInstance();
        // --- Services ---
        const eventService = new EventService_1.default();
        const organizerService = new OrganizerService_1.default();
        const participantService = new ParticipantService_1.default();
        const speakerService = new SpeakerService_1.default();
        // --- Controllers ---
        this.ec = new EventController_1.default(eventService);
        this.oc = new OrganizerController_1.default(organizerService);
        this.pc = new ParticipantController_1.default(participantService);
        this.sc = new SpeakerControler_1.default(speakerService);
    }
    start() {
        new MainScreen_1.default(this);
    }
}
exports.default = MainController;
