import promptSync from 'prompt-sync';

import Database from '../db/Database';
import { StatusEnum } from '../Enum/StatusEnum';
import MainController from '../controller/MainController';

const prompt = promptSync();

export default class EventView {
    private mainController: MainController;
    private database: Database;

    constructor() {
        this.mainMenu();
        this.database = Database.getInstance();  
        this.mainController = new MainController();
        
    }

    private mainMenu(): void {
        let continuar = true;

        while (continuar) {
            console.log("===============================");
            console.log("    MENU     ");
            console.log("===============================");
            console.log("1. Create Event");
            console.log("2. Delete Event");
            console.log("3. List Events");
            console.log("4. Exit");
            console.log("===============================");

            const escolha = prompt("Escolha uma opção: ");

            switch (escolha) {
                case '1':
                    console.log("You chose Create Event: ");
                    const name = prompt('Event name: ');
                    const time = parseInt(prompt('Time in minutes for event: '));
                    const max = parseInt(prompt('Max participant number: '));
                    const field = prompt('Field: ');
                    const status = StatusEnum.UM

                    const event = this.mainController.ec
                        .getNewEventService()
                        .createEvent(name, time, max, field, status);
                    
                        this.database.insertNewEvent(event);

                    console.log("Event created successfully!");
                    break;

                case '2':
                    break;

                case '3':
                    console.log("📋 All Events:");
                    console.log(this.database.getAllEvents());
                    break;

                case '4':
                    continuar = false;
                    break;

                default:
                    console.log(" Invalid option. Try again.\n");
                    break;
            }
        }
    }
}
