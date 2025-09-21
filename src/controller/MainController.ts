// controller/MainController.ts
import Database from "../db/Database";
import MainScreen from "../view/MainScreen";
import EventController from "./EventController";
import OrganizerController from "./OrganizerController";
import EventService from "../service/EventService";
import OrganizerService from "../service/OrganizerService";
import ParticipantController from "./ParticipantController";
import ParticipantService from "../service/ParticipantService";

export default class MainController {
    public db: Database;
    public ec: EventController;
    public oc: OrganizerController;
    public pc: ParticipantController;

    constructor() {
        this.db = Database.getInstance();

        // --- Services ---
        const eventService = new EventService();
        const organizerService = new OrganizerService();
        const participantService = new ParticipantService();

        // --- Controllers ---
        this.ec = new EventController(eventService);
        this.oc = new OrganizerController(organizerService);
        this.pc = new ParticipantController(participantService);

    }

    public start(): void {
        new MainScreen(this);
    }
}
