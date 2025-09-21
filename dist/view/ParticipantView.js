"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Database_1 = __importDefault(require("../db/Database"));
const People_1 = __importDefault(require("../model/People"));
class ParticipantView {
    mainController;
    database;
    constructor(mainController) {
        this.mainController = mainController;
        this.database = Database_1.default.getInstance();
        this.mainMenu();
    }
    mainMenu() {
        let continuar = true;
        while (continuar) {
            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Create User");
            console.log("2. List Users");
            console.log("3. Exit");
            console.log("===============================");
            const escolha = prompt("Escolha uma opção: ");
            switch (escolha) {
                case '1':
                    console.log("You chose Create User");
                    this.createParticipantMenu();
                    break;
                case '2':
                    console.log("You chose List Users");
                    this.listUsersMenu();
                    break;
                case '3':
                    continuar = false;
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.\n");
                    break;
            }
        }
    }
    createParticipantMenu() {
        console.log("\n🎉 Creating New User:");
        console.log("===============================");
        const id = Number(People_1.default.setId());
        const name = prompt('Participant name: ');
        const cpf = prompt('Insert your CPF, only numbers ');
        const mail = prompt('Insert your mail ');
        const enrollmentId = Number(People_1.default.setId());
        const participant = this.mainController.pc.createParticipant(id, name, cpf, mail, enrollmentId);
        this.database.createNewParticipant(participant);
    }
    listUsersMenu() {
        const users = this.database.getAllParticipants();
        if (users.length === 0) {
            console.log("No users found");
            return;
        }
        users.forEach((user, index) => {
            console.log(`\n${index + 1}. Participant Details:`);
            console.log(`   🆔 ID: ${user.getId()}`);
            console.log(`   📛 Name: ${user.getName()}`);
            console.log(`   📝 CPF: ${user.getCpf()}`);
            console.log(`   📧 Mail: ${user.getMail()}`);
            console.log(`   🎫 Enrollment ID: ${user.getEnrollmentId()}`);
        });
    }
}
exports.default = ParticipantView;
