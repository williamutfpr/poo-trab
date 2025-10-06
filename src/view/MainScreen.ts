import promptSync from 'prompt-sync';

import ParticipantView from "./ParticipantView";
import OrganizerView from './OrganizerView';
import SpeakerView from './SpeakerView';
import EventView from './EventView';
import MainController from '../controller/MainController';


const prompt = promptSync();
export default class MainScreen {
    private mainController: MainController;

    constructor(mainController: MainController) {
        this.mainController = mainController;
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

            const choice = prompt("Chose a option: ");

            switch (choice) {
                case '1':
                    new ParticipantView(this.mainController).mainMenu();
                    break;
                case '2':
                    new OrganizerView(this.mainController).mainMenu();
                    break;  
                case '3':
                    new SpeakerView(this.mainController).mainMenu();
                    break;
                case '4':
                    new EventView(this.mainController).mainMenu();
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