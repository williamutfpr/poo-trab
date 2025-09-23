import SpeakerService from "../service/SpeakerService";


export default class SpeakerControler {
    constructor(private service: SpeakerService) { }

    public createSpeaker(
        id: number,
        name: string,
        cpf: string,
        mail: string,
        practice_area: string
    ) {
        return this.service.createSpeaker(id,
            name,
            cpf,
            mail,
            practice_area
        )
    }

    public listSpeakers() {
        this.service.listSpeakers()
    }

}