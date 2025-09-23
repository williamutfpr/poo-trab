import promptSync from 'prompt-sync';

import Database from '../db/Database';
import { StatusEnum } from '../Enum/StatusEventEnum';

import MainController from '../controller/MainController';

import { OnSiteEvent } from '../model/OnSiteEvent';
import { AsyncEvent } from '../model/AsyncEvent';

import { Event } from '../model/Event';
import { TypeEventEnum } from '../Enum/TypeEventEnum';

const prompt = promptSync();

export default class EventView {
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
            console.log("          MENU                 ");
            console.log("===============================");
            console.log("1. Create Event");
            console.log("2. Delete Event");
            console.log("3. List Events");
            console.log("4. Exit");
            console.log("===============================");

            const escolha = prompt("Escolha uma opção: ");

            switch (escolha) {
                case '1':
                    this.createEventMenu();
                    break;

                case '2':
                    this.deleteEventMenu();
                    break;

                case '3':
                    this.listEventsMenu();
                    break;

                case '4':
                    continuar = false;
                    console.log("👋 Goodbye!");
                    break;

                default:
                    console.log("❌ Invalid option. Try again.\n");
                    break;
            }
        }
    }

    private createEventMenu(): void {

        console.log("\n🎉 Creating New Event:");
        console.log("===============================");
        const id = Event.setId();
        const name = prompt('Event name: ');
        const time = parseInt(prompt('Time in minutes for event: '));
        const max = parseInt(prompt('Max participant number: '));
        const field = prompt('Field: ');
        const status = StatusEnum.NT;

        // Escolher tipo de evento
        console.log("\nEvent Type:");
        console.log("1. Online (EAD)");
        console.log("2. On-site (Presencial)");
        const typeOption = prompt("Choose event type (1 or 2): ");

        let type;
        let event;

        if (typeOption === '1') {

            AsyncEvent.getEvent();

            type = TypeEventEnum.EAD
            const link = prompt('Meeting link: ');

            event = this.mainController.oc.createEvent(
                id, type, name, time, max, field, status, link
            );


        } else if (typeOption === '2') {
            OnSiteEvent.getEvent();

            type = TypeEventEnum.PRESENCIAL

            console.log("\n📍 Event Address:");
            const rua = prompt('Street name: ');
            const numero = parseInt(prompt('Number: '));
            const city = prompt('City: ');
            const state = prompt('State: ');
            const zip = prompt('ZIP code: ');

            const address = this.mainController.oc.createAddress(rua, numero, city, state, zip);

            event = this.mainController.oc.createEvent(
                id, type, name, time, max, field, status, address
            );

        } else {
            console.log("❌ Invalid event type. Returning to main menu.");
            return;
        }

        console.log("\n👤 Event Organizer:");
        const organizerId = parseInt(prompt('Organizer ID: '));
        let organizer = this.mainController.oc.getAllOrganizers().find(id => id.getId() === organizerId);

        if (!organizer) {
            console.log("Organizer not found. Creating new organizer:");
            const orgName = prompt('Organizer name: ');
            const orgCPF = prompt('Organizer CPF: ');
            const orgSector = prompt('Organizer sector: ');
            const orgEmail = prompt('Organizer email: ');

            organizer = this.mainController.oc.createOrganizer(organizerId, orgName, orgCPF, orgSector, orgEmail);
            const organizerDB = this.database.insertNewOrganizer(organizer)
            return organizerDB;
        }
    }

    private deleteEventMenu(): void {

    }

    private listEventsMenu(): void {
        console.log("\n📋 All Events:");
        console.log("===============================");
        const events = this.database.getAllEvents();

        if (events.length === 0) {
            console.log("📭 No events found.\n");
            return;
        }

        events.forEach((event, index) => {
            console.log(`\n${index + 1}. Event Details:`);
            console.log(`   📅 Name: ${event.getName()}`);
            console.log(`   🆔 ID: ${event.getId()}`);
            console.log(`   ⏰ Duration: ${event.getTime()} minutes`);
            console.log(`   👥 Max Participants: ${event.getMaxParticipants()}`);
            console.log(`   📚 Field: ${event.getField()}`);
            console.log(`   📊 Status: ${event.getStatus()}`);
            console.log(`   🎯 Type: ${event.getType()}`);

            // Mostrar informações específicas baseadas no tipo
            if (event instanceof AsyncEvent) {
                console.log(`   🔗 Link: ${event.getLink?.()}`);
            } else if (event instanceof OnSiteEvent) {
                const addr = event.getAddress?.();
                if (addr) {
                    console.log(`   📍 Address: ${addr.getRua()}, ${addr.getNumero()}, ${addr.getCity()}, ${addr.getState()}`);
                }
            }
        }
        )
        console.log();
    }
}