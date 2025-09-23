import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";

import Database from "../db/Database";

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
      console.log("3. Delete Organizer");
      console.log("4. Add Speaker on event");
      console.log("5. Return")
    }



  }
}