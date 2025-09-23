import {ISpeaker} from "../interfaces/ISpeaker";
import Speaker from "../model/Speaker";

import Database from "../db/Database";

export default class SpeakerService implements ISpeaker {

    private db = Database.getInstance();


    createSpeaker(id: number, name: string, cpf: string, mail: string, practice_area: string) : Speaker {
    const speaker
        = new Speaker(
        id,
        name,
        cpf,
        mail,
        practice_area
    );
    this.db.createNewSpeaker(speaker)
    return speaker;
}

}