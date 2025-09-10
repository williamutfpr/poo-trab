import promptSync from 'prompt-sync';

import ParticipantView from "./ParticipantView";
import OrganizerView from './OrganizerView';
import SpeakerView from './SpeakerView';
import EventView from './EventView';


const prompt = promptSync();
export default class MainScreen {

    constructor() {
        this.mainMenu();
    }

    private mainMenu(): void {
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

            const escolha = prompt("Escolha uma opção: ");

            switch (escolha) {
                case '1':
                    new ParticipantView();
                    break;
                case '2':
                    new OrganizerView();
                    break;
                case '3':
                    new SpeakerView();
                    break;
                case '4':
                    new EventView();
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
