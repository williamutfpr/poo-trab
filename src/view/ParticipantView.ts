import promptSync from 'prompt-sync';
const prompt = promptSync();

import Participant from '../model/Participant';
import Database from '../db/Database';
import MainController from '../controller/MainController';
import People from '../model/People';

export default class ParticipantView {
    private mainController: MainController;
    private database: Database;

    constructor(mainController: MainController) {
        this.mainController = mainController;
        this.database = Database.getInstance();
        this.mainMenu();
    }

    private mainMenu(): void {
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

    private createParticipantMenu(): void {
        console.log("\n🎉 Creating New User:");
        console.log("===============================");
        const id = Number(People.setId());
        const name = prompt('Participant name: ');
        const cpf = prompt('Insert your CPF, only numbers ');
        const mail = prompt('Insert your mail ');
        const enrollmentId = Number(People.setId());

        const participant = this.mainController.pc.createParticipant(
            id,
            name,
            cpf,
            mail,
            enrollmentId
        );
        this.database.createNewParticipant(participant);
    }

    private listUsersMenu(): void {
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
