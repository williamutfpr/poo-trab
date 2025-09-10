"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
const StatusEnum_1 = require("../Enum/StatusEnum");
const MainController_1 = __importDefault(require("../controller/MainController"));
const prompt = (0, prompt_sync_1.default)();
class EventView {
    mainController;
    database;
    constructor() {
        this.mainMenu();
        this.database = Database_1.default.getInstance();
        this.mainController = new MainController_1.default();
    }
    mainMenu() {
        let continuar = true;
        while (continuar) {
            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Create Event");
            console.log("2. Delete Event");
            console.log("3. List Events");
            console.log("4. Exit");
            console.log("===============================");
            const escolha = prompt("Escolha uma opção: ");
            switch (escolha) {
                case '1':
                    console.log("You chose Create Event: ");
                    const name = prompt('Event name: ');
                    const time = parseInt(prompt('Time in minutes for event: '));
                    const max = parseInt(prompt('Max participant number: '));
                    const field = prompt('Field: ');
                    const status = StatusEnum_1.StatusEnum.UM;
                    const event = this.mainController.ec
                        .getNewEventService()
                        .createEvent(name, time, max, field, status);
                    this.database.insertNewEvent(event);
                    console.log("Event created successfully!");
                    break;
                case '2':
                    break;
                case '3':
                    console.log("📋 All Events:");
                    console.log(this.database.getAllEvents());
                    break;
                case '4':
                    continuar = false;
                    break;
                default:
                    console.log(" Invalid option. Try again.\n");
                    break;
            }
        }
    }
}
exports.default = EventView;
