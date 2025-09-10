import promptSync from 'prompt-sync';



const prompt = promptSync();

export default class ParticipantView {
    constructor() {
        this.mainMenu();
    }



    private mainMenu(): void {
        let continuar = true;

        while (continuar) {

            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Create Participant");
            console.log("2. Delete Participant");
            console.log("5. Exit");
            console.log("===============================");

            const escolha = prompt("Escolha uma opção: ");

            switch (escolha) {
                case '1':
                    console.log("You chose Create Participant");

                    break;
                case '2':
                    
                    break;
                case '3':

                    break;
                case '4':
                    continuar = false;
                    break;

                default:
                    console.log("Opção inválida. Tente novamente.\n");
                    break;
            }
        }
    }
}
