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
        this.mainMenu();
    }
    mainMenu() {
        let continues = true;
        while (continues = true) {
            console.log("You chose Organize console");
            console.log("1. Create Organizer");
            console.log("2. List Organizer");
            console.log("3. Delete Organizer");
            console.log("4. Add Speaker on event");
            console.log("5. Return");
        }
    }
}
exports.default = SpeakerView;
