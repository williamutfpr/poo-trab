import EventController from "./EventController";
import MainScreen from "../view/MainScreen";
import Database from "../db/Database";

export default class MainController {

    public db: Database = new Database(); 
    public ec: EventController = new EventController(); 

    constructor() {
         this.db = Database.getInstance();
        this.ec = new EventController();
        
        new MainScreen();
    }


}