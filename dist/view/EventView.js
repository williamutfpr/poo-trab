"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Database_1 = __importDefault(require("../db/Database"));
const StatusEventEnum_1 = require("../Enum/StatusEventEnum");
const OnSiteEvent_1 = require("../model/OnSiteEvent");
const AsyncEvent_1 = require("../model/AsyncEvent");
const Event_1 = require("../model/Event");
const TypeEventEnum_1 = require("../Enum/TypeEventEnum");
const Address_1 = __importDefault(require("../model/Address"));
const prompt = (0, prompt_sync_1.default)();
class EventView {
    mainController;
    database;
    constructor(mainController) {
        this.mainController = mainController;
        this.database = Database_1.default.getInstance();
        // Inserindo eventos de teste para garantir que a busca funcione
        this.database.insertNewEvent(new AsyncEvent_1.AsyncEvent(1, TypeEventEnum_1.TypeEventEnum.EAD, "Evento Teste CP", 60, 50, "TI", StatusEventEnum_1.StatusEnum.CP, "https://link1.com"));
        this.database.insertNewEvent(new AsyncEvent_1.AsyncEvent(2, TypeEventEnum_1.TypeEventEnum.EAD, "Evento Teste NT", 45, 30, "TI", StatusEventEnum_1.StatusEnum.NT, "https://link2.com"));
        this.database.insertNewEvent(new AsyncEvent_1.AsyncEvent(3, TypeEventEnum_1.TypeEventEnum.EAD, "Evento Teste IP", 90, 20, "TI", StatusEventEnum_1.StatusEnum.IP, "https://link3.com"));
        const address = new Address_1.default("Rua A", 123, "Guarapuava", "PR", "85000-000");
        this.database.insertNewEvent(new OnSiteEvent_1.OnSiteEvent(4, TypeEventEnum_1.TypeEventEnum.PRESENCIAL, "Evento Presencial CP", 120, 100, "TI", StatusEventEnum_1.StatusEnum.CP, address));
    }
    mainMenu() {
        let continuar = true;
        while (continuar) {
            console.log("===============================");
            console.log("          MENU                 ");
            console.log("===============================");
            console.log("1. Create Event");
            console.log("2. List Events");
            console.log("3. Search Event");
            console.log("4. Exit");
            console.log("===============================");
            const escolha = prompt("Escolha uma opção: ");
            switch (escolha) {
                case '1':
                    this.createEventMenu();
                    break;
                case '2':
                    this.listEventsMenu();
                    break;
                case '3':
                    this.searchEvent();
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
    createEventMenu() {
        console.log("\n🎉 Creating New Event:");
        console.log("===============================");
        const id = Event_1.Event.setId();
        const name = prompt('Event name: ');
        const time = parseInt(prompt('Time in minutes for event: '));
        const max = parseInt(prompt('Max participant number: '));
        const field = prompt('Field: ');
        const status = StatusEventEnum_1.StatusEnum.NT;
        console.log("\nEvent Type:");
        console.log("1. Online (EAD)");
        console.log("2. On-site (Presencial)");
        const typeOption = prompt("Choose event type (1 or 2): ");
        let type;
        let event;
        if (typeOption === '1') {
            type = TypeEventEnum_1.TypeEventEnum.EAD;
            const link = prompt('Meeting link: ');
            event = this.mainController.oc.createEvent(id, type, name, time, max, field, status, link);
        }
        else if (typeOption === '2') {
            type = TypeEventEnum_1.TypeEventEnum.PRESENCIAL;
            console.log("\n📍 Event Address:");
            const rua = prompt('Street name: ');
            const numero = parseInt(prompt('Number: '));
            const city = prompt('City: ');
            const state = prompt('State: ');
            const zip = prompt('ZIP code: ');
            const address = this.mainController.oc.createAddress(rua, numero, city, state, zip);
            event = this.mainController.oc.createEvent(id, type, name, time, max, field, status, address);
        }
        else {
            console.log("❌ Invalid event type. Returning to main menu.");
            return;
        }
        console.log("✅ Event created successfully!");
    }
    listEventsMenu() {
        console.log("\n📋 All Events:");
        console.log("===============================");
        const events = this.database.getAllEvents();
        if (events.length === 0) {
            console.log("📭 No events found.\n");
            return;
        }
        this.printEvents(events);
    }
    searchEvent() {
        let cont = true;
        while (cont) {
            console.log("\nSearch Event");
            console.log("You prefer:");
            console.log("1. Name");
            console.log("2. Status");
            console.log("3. Back to main menu");
            const question = prompt("Choose your option with 1, 2 or 3: ");
            switch (question) {
                case "1":
                    const name = prompt("Search Name: ");
                    const results = this.mainController.ec.searchEvent(name);
                    this.printEvents(results);
                    cont = false;
                    break;
                case "2":
                    console.log("1. completed");
                    console.log("2. in progress");
                    console.log("3. not started");
                    const statusOption = prompt("Choose a status option: ");
                    let resultsStatus = [];
                    if (statusOption === "1") {
                        resultsStatus = this.mainController.ec.searchEvent(StatusEventEnum_1.StatusEnum.CP);
                    }
                    else if (statusOption === "2") {
                        resultsStatus = this.mainController.ec.searchEvent(StatusEventEnum_1.StatusEnum.IP);
                    }
                    else if (statusOption === "3") {
                        resultsStatus = this.mainController.ec.searchEvent(StatusEventEnum_1.StatusEnum.NT);
                    }
                    else {
                        console.log("❌ Invalid status option.");
                        continue;
                    }
                    this.printEvents(resultsStatus);
                    cont = false;
                    break;
                case "3":
                    cont = false;
                    break;
                default:
                    console.log("❌ Invalid option.");
            }
        }
    }
    printEvents(events) {
        if (events.length === 0) {
            console.log("Nenhum evento encontrado.");
            return;
        }
        events.forEach(e => {
            console.log("=========================");
            console.log(`Name: ${e.getName()}`);
            console.log(`Status: ${e.getStatus()}`);
            console.log(`Type: ${e.getType()}`);
            console.log(`Time: ${e.getTime()} minutes`);
        });
    }
}
exports.default = EventView;
