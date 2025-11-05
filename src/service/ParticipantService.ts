import Database from "../db/Database";

import IParticipant from "../interfaces/IParticipant";
import Participant from "../model/Participant";

import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";

export default class ParticipantService implements IParticipant {

  private db = Database.getInstance();

  public createParticipant(
    id: number,
    name: string,
    cpf: string,
    mail: string,
    enrollmentId: number
  ): Participant {
    const participant
      = new Participant(
        id,
        name,
        cpf,
        mail,
        enrollmentId
      );
    this.db.createNewParticipant(participant);
    return participant;
  }

  public subscribeInEvent(
    e: Event<Participant>,
    p: Participant
  ): AsyncEvent | OnSiteEvent {
    return this.db.insertParticipantInEvent(e, p);
  }


  public getAllParticipants(): Participant[] {
    return this.db.getAllParticipants()
  }

}