import Participant from "../model/Participant";
import ParticipantService from "../service/ParticipantService";

import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";

export default class ParticipantController {
  constructor(private service: ParticipantService) { }

  public createParticipant(
    id: number,
    name: string,
    cpf: string,
    mail: string,
    enrollmentId: number
  ): Participant 
  {
    return this.service.createParticipant(
      id,
      name,
      cpf,
      mail,
      enrollmentId
    );
  }

  public subscibeInEvent(
    e:Event<Participant>,
    p:Participant
  ) : AsyncEvent | OnSiteEvent
  {
    return this.service.subscribeInEvent(e,p); 
  }

  public getAllParticipants(): Participant[] {
      return this.service.getAllParticipants();
    }

}