"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventController_1 = __importDefault(require("./EventController"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
const Database_1 = __importDefault(require("../db/Database"));
class MainController {
    db = new Database_1.default();
    ec = new EventController_1.default();
    constructor() {
        this.db = Database_1.default.getInstance();
        this.ec = new EventController_1.default();
        new MainScreen_1.default();
    }
}
exports.default = MainController;
