// controller/EventController.ts
import EventService from "../service/EventService";
import { Event } from "../model/Event";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import Participant from "../model/Participant";
import Speaker from "../model/Speaker";
import { StatusEnum } from "../Enum/StatusEventEnum";

export default class EventController {
  constructor(private service: EventService) {}

  // --- Listagem ---
  public listEvents(): Event<Participant>[] {
    return this.service.listEvents();
  }

  public listAsyncEvents(): AsyncEvent[] {
    return this.service.listAsyncEvents();
  }

  public listOnSiteEvents(): OnSiteEvent[] {
    return this.service.listOnSiteEvents();
  }

  // --- Participants ---
  public addParticipant(participant: Participant, event: Event<Participant>): void {
    this.service.addParticipant(participant, event);
  }

  // public removeParticipant(participant: Participant, event: Event): void {
  //   this.service.removeParticipant(participant, event);
  // }

  public searchEvent(option: StatusEnum | string): Event<Participant>[] {
  return this.service.searchEvent(option);
}

}
