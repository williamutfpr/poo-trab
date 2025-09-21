import MainController from "../controller/MainController";
import Database from "../db/Database";

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
      console.log("You chose Speaker console");
      console.log("1. Create Speaker");
      console.log("2. List Speaker");
      console.log("3. Delete Speaker");
      console.log("4. Return")
    }

    let choice = prompt("Chose a option");
    switch (choice) {
      case "1":
        this.createSpeakerMenu();
        break

      case "2":
        this.listSpeakerMenu();
        break

      case "3":
        this.deleteSpeakerMenu();
        break

      case "4":
        console.log("back");
        break

      default:
        console.log("❌ Invalid option. Try again.\n");
        break
    }
  }

  public createSpeakerMenu(): void {

  }

  public listSpeakerMenu(): void {

  }

  public deleteSpeakerMenu(): void {

  }

}
