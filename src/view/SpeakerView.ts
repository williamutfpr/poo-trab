import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";

import Database from "../db/Database";
import { before } from "node:test";
import People from "../model/People";

const prompt = PromptSync();


export default class SpeakerView {
  private mainController: MainController;
  private database: Database;

  constructor(mainController: MainController) {
    this.mainController = mainController;
    this.database = Database.getInstance();
    this.mainMenu();
  }

  private mainMenu(): void {
    let continues = true;

    while (continues = true) {
      console.log("You chose Organize console");
      console.log("1. Create Organizer");
      console.log("2. List Organizer");
      console.log("3. Add Speaker on event");
      console.log("4. Return")
    }

    let choice = prompt("choose an option ")

    switch (choice) {
      case "1":
        this.createOrganizer();
        break

      case "2":
        this.listOrganizer();
        break

      case "3":
        console.log("Back")
        break
    }


  }
  private createOrganizer(): void {
    console.log("\n🎉 Creating New User:");
    console.log("===============================");
    const id = Number(People.setId());
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