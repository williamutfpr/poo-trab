import Speaker from "../model/Speaker";

export interface  ISpeaker {

    createSpeaker(
        id: number,
        name: string,
        cpf: string,
        mail: string,
        practice_area: string
    ) : Speaker

}