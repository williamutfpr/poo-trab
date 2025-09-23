"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ParticipantView_1 = __importDefault(require("./ParticipantView"));
const OrganizerView_1 = __importDefault(require("./OrganizerView"));
const SpeakerView_1 = __importDefault(require("./SpeakerView"));
const EventView_1 = __importDefault(require("./EventView"));
const prompt = (0, prompt_sync_1.default)();
class MainScreen {
    mainController;
    constructor(mainController) {
        this.mainController = mainController;
        this.mainMenu();
    }
    mainMenu() {
        let continuar = true;
        while (continuar) {
            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Configure Participant");
            console.log("2. Configure Organizer");
            console.log("3. Configure Speaker");
            console.log("4. Configure Event");
            console.log("5. Exit");
            console.log("===============================");
            const choice = prompt("Chose a option: ");
            switch (choice) {
                case '1':
                    new ParticipantView_1.default(this.mainController);
                    break;
                case '2':
                    new OrganizerView_1.default(this.mainController);
                    break;
                case '3':
                    new SpeakerView_1.default(this.mainController);
                    break;
                case '4':
                    new EventView_1.default(this.mainController);
                    break;
                case '5':
                    continuar = false;
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.\n");
                    break;
            }
        }
    }
}
exports.default = MainScreen;
