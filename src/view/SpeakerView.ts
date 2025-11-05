import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";

import Database from "../db/Database";
import People from "../model/People";

const prompt = PromptSync();


export default class SpeakerView {
  private mainController: MainController;
  private database: Database;

  constructor(mainController: MainController) {
    this.mainController = mainController;
    this.database = Database.getInstance();

  }

  public mainMenu(): void {
    let running = true;

    while (running) {
      console.log("\nYou chose Speaker console");
      console.log("1. Create Speaker");
      console.log("2. List Speakers");
      console.log("3. Return");

      let choice = prompt("Choose an option: ");

      switch (choice) {
        case "1":
          this.createOrganizer();
          break;

        case "2":
          this.listOrganizer();
          break;

        case "3":
          console.log("Back");
          running = false; // encerra o loop
          break;

        default:
          console.log("❌ Invalid option. Try again.\n");
          break;
      }
    }
  }

  private createOrganizer(): void {
    console.log("\n🎉 Creating New User:");
    console.log("===============================");
    const id = Number(this.database.setId());
    const name = prompt('Participant name: ');
    const cpf = prompt('Insert your CPF, only numbers ');
    const mail = prompt('Insert your mail ');
    const practice_area = prompt("Your practice area");

    const speaker = this.mainController.sc.createSpeaker(
      id,
      name,
      cpf,
      mail,
      practice_area
    );
    this.database.createNewSpeaker(speaker);
  }

  private listOrganizer(): void {
    this.mainController.sc.listSpeakers()
  }

}