import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import Database from "../db/Database";
import People from "../model/People";
import Entity from "../model/Entity";
import Organizer from "../model/Organizer";

const prompt = PromptSync();

export default class OrganizerView {
  private mainController: MainController;
  private database: Database;

  constructor(mainController: MainController) {
    this.mainController = mainController;
    this.database = Database.getInstance();
  }


  
  public mainMenu(): void {
    let running = true;

    while (running) {
      console.log("\nYou chose Organize console");
      console.log("1. Create Organizer");
      console.log("2. List Organizer");
      console.log("3. Add Speaker on event");
      console.log("4. Return");

      let choice = prompt("Choose an option: ");

      switch (choice) {
        case "1":
          this.createOrganizerMenu();
          break;

        case "2":
          this.listOrganizerMenu();
          break;

        case "3":
          this.AddSpeakerOnEvent();
          break;

        case "4":
          console.log("Returning...");
          running = false; 
          break;

        default:
          console.log("❌ Invalid option. Try again.\n");
          break;
      }
    }
  }


  public createOrganizerMenu(): void {
    console.log("\n🎉 Creating New Organizer:");
    console.log("===============================");
    const id = Number(this.database.setId());
    const name = prompt('Participant name: ');
    const cpf = prompt('Insert your CPF, only numbers: ');
    const mail = prompt('Insert your mail: ');
    const sector = prompt('Insert sector: ')

    const organizer = this.mainController.oc.createOrganizer(id, name, cpf, mail, sector)
    this.database.insertNewOrganizer(organizer)
  }

  public listOrganizerMenu(): void {
    const organizers = this.database.getAllOrganizers();

    if (organizers.length === 0) {
      console.log("No users found");
      return;
    }

    organizers.forEach((organizers, index) => {
      console.log(`\n${index + 1}. Participant Details:`);
      console.log(`   🆔 ID: ${organizers.getId()}`);
      console.log(`   📛 Name: ${organizers.getName()}`);
      console.log(`   📝 CPF: ${organizers.getCpf()}`);
      console.log(`   📧 Mail: ${organizers.getMail()}`);
      console.log(`   🎫 Sector: ${organizers.getSector()}`);
    });
  }

  public AddSpeakerOnEvent(): void {
    // this.mainController.oc.addSpeakerinEvent(e,s)
  }
}