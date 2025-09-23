"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
const People_1 = __importDefault(require("../model/People"));
const prompt = (0, prompt_sync_1.default)();
class OrganizerView {
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
        let choice = prompt("Chose a option");
        switch (choice) {
            case "1":
                this.createOrganizerMenu();
                break;
            case "2":
                this.listOrganizerMenu();
                break;
            case "3":
                this.AddSpeakerOnEvent();
                break;
            case "4":
                console.log("back");
                break;
            default:
                console.log("❌ Invalid option. Try again.\n");
                break;
        }
    }
    createOrganizerMenu() {
        console.log("\n🎉 Creating New Organizer:");
        console.log("===============================");
        const id = Number(People_1.default.setId());
        const name = prompt('Participant name: ');
        const cpf = prompt('Insert your CPF, only numbers: ');
        const mail = prompt('Insert your mail: ');
        const sector = prompt('Insert sector: ');
        const organizer = this.mainController.oc.createOrganizer(id, name, cpf, mail, sector);
        this.database.insertNewOrganizer(organizer);
    }
    listOrganizerMenu() {
        const organizers = this.database.getAllOrganizers();
        if (organizers.length === 0) {
            console.log("No users found");
            return;
        }
        organizers.forEach((organizers, index) => {
            console.log(`\n${index + 1}. Participant Details:`);
            console.log(`   🆔 ID: ${organizers.getId()}`);
            console.log(`   📛 Name: ${organizers.getName()}`);
            console.log(`   📝 CPF: ${organizers.getCpf()}`);
            console.log(`   📧 Mail: ${organizers.getMail()}`);
            console.log(`   🎫 Sector: ${organizers.getSector()}`);
        });
    }
    AddSpeakerOnEvent() {
        this.mainController.ec;
        // this.mainController.oc.addSpeakerinEvent(e,s)
    }
}
exports.default = OrganizerView;
