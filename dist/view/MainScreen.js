import promptSync from 'prompt-sync';
import ParticipantView from "./ParticipantView";
const prompt = promptSync();
export default class MainScreen {
    constructor() {
        this.mainMenu();
    }
    limparConsole() {
        process.stdout.write('\x1B[2J\x1B[H');
    }
    mainMenu() {
        let continuar = true;
        while (continuar) {
            this.limparConsole();
            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Configure Participant");
            console.log("2. Configure Organizer");
            console.log("3. Configure Organizador");
            console.log("4. Configure Event");
            console.log("5. Exit");
            console.log("===============================");
            const escolha = prompt("Escolha uma opção: ");
            switch (escolha) {
                case '1':
                    new ParticipantView();
                    break;
                case '2':
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
