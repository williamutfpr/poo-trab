import promptSync from 'prompt-sync';

const prompt = promptSync();

export default class ParticipantView {
    constructor() {
        this.mainMenu();
    }

    private limparConsole(): void {
        process.stdout.write('\x1B[2J\x1B[H');
    }

    private mainMenu(): void {
        let continuar = true;

        while (continuar) {
            this.limparConsole();

            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Create Participant");
            console.log("2. Delete Participant");
            console.log("3. Create Organizador");
            console.log("4. Create Event");
            console.log("5. Exit");
            console.log("===============================");

            const escolha = prompt("Escolha uma opção: ");

            switch (escolha) {
                case '1':
                    this.limparConsole();
                    console.log("You chose Create Participant");

                    break;
                case '2':

                case '5':
                    continuar = false;
                    break;
                default:
                    this.limparConsole();
                    console.log("Opção inválida. Tente novamente.\n");
                    break;
            }
        }
    }
}
