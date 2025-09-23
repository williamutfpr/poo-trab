// controller/MainController.ts
import Database from "../db/Database";
import MainScreen from "../view/MainScreen";
import EventController from "./EventController";
import OrganizerController from "./OrganizerController";
import ParticipantController from "./ParticipantController";
import SpeakerControler from "./SpeakerControler";


import EventService from "../service/EventService";
import OrganizerService from "../service/OrganizerService";
import ParticipantService from "../service/ParticipantService";
import SpeakerService from "../service/SpeakerService";

export default class MainController {
    public db: Database;
    public ec: EventController;
    public oc: OrganizerController;
    public pc: ParticipantController;
    public sc : SpeakerControler;

    constructor() {
        this.db = Database.getInstance();

        // --- Services ---
        const eventService = new EventService();
        const organizerService = new OrganizerService();
        const participantService = new ParticipantService();
        const speakerService = new SpeakerService();

        // --- Controllers ---
        this.ec = new EventController(eventService);
        this.oc = new OrganizerController(organizerService);
        this.pc = new ParticipantController(participantService);
        this.sc = new SpeakerControler(speakerService);

    }

    public start(): void {
        new MainScreen(this);
    }
}
