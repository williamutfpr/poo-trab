"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
const People_1 = __importDefault(require("../model/People"));
const prompt = (0, prompt_sync_1.default)();
class SpeakerView {
    mainController;
    database;
    constructor(mainController) {
        this.mainController = mainController;
        this.database = Database_1.default.getInstance();
        this.mainMenu();
    }
    mainMenu() {
        let continues = true;
        while (continues = true) {
            console.log("You chose Organize console");
            console.log("1. Create Organizer");
            console.log("2. List Organizer");
            console.log("3. Add Speaker on event");
            console.log("4. Return");
        }
        let choice = prompt("choose an option ");
        switch (choice) {
            case "1":
                this.createOrganizer();
                break;
            case "2":
                this.listOrganizer();
                break;
            case "3":
                console.log("Back");
                break;
        }
    }
    createOrganizer() {
        console.log("\n🎉 Creating New User:");
        console.log("===============================");
        const id = Number(People_1.default.setId());
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
