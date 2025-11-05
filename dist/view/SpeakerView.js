"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
const prompt = (0, prompt_sync_1.default)();
class SpeakerView {
    mainController;
    database;
    constructor(mainController) {
        this.mainController = mainController;
        this.database = Database_1.default.getInstance();
    }
    mainMenu() {
        let running = true;
        while (running) {
            console.log("\nYou chose Speaker console");
            console.log("1. Create Speaker");
            console.log("2. List Speakers");
            console.log("3. Return");
            let choice = prompt("Choose an option: ");
            switch (choice) {
                case "1":
                    this.createOrganizer();
                    break;
                case "2":
                    this.listOrganizer();
                    break;
                case "3":
                    console.log("Back");
                    running = false; // encerra o loop
                    break;
                default:
                    console.log("❌ Invalid option. Try again.\n");
                    break;
            }
        }
    }
    createOrganizer() {
        console.log("\n🎉 Creating New User:");
        console.log("===============================");
        const id = Number(this.database.setId());
        const name = prompt('Participant name: ');
        const cpf = prompt('Insert your CPF, only numbers ');
        const mail = prompt('Insert your mail ');
        const practice_area = prompt("Your practice area");
        const speaker = this.mainController.sc.createSpeaker(id, name, cpf, mail, practice_area);
        this.database.createNewSpeaker(speaker);
    }
    listOrganizer() {
        this.mainController.sc.listSpeakers();
    }
}
exports.default = SpeakerView;
