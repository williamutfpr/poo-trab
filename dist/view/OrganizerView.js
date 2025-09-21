"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
class OrganizerView {
    mainController;
    database;
    constructor(mainController) {
        this.mainController = mainController;
        this.database = Database_1.default.getInstance();
        this.mainMenu();
    }
    mainMenu() {
    }
}
exports.default = OrganizerView;
