import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";

import Participant from "../model/Participant";

export default interface IParticipant {
  createParticipant(
    id: number,
    name: string,
    cpf: string,
    mail: string,
    enrollmentId: number
  ): Participant;

  
  subscribeInEvent(
    e: Event,
    p: Participant
  ): AsyncEvent | OnSiteEvent;


  getAllParticipants(): Participant[];
}
