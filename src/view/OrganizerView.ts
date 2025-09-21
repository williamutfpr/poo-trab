import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import Database from "../db/Database";

const prompt = PromptSync();

export default class OrganizerView {
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
      console.log("4. Return")
    }

    let choice = prompt("Chose a option");
    switch (choice) {
      case "1":
        this.createOrganizerMenu();
        break

      case "2":
        this.listOrganizerMenu();
        break

      case "3":
        this.deleteOrganizerMenu();
        break

      case "4":
        console.log("back");
        break

      default:
        console.log("❌ Invalid option. Try again.\n");
        break
    }
  }

  public createOrganizerMenu(): void {

  }

  public listOrganizerMenu(): void {

  }

  public deleteOrganizerMenu(): void {

  }
}