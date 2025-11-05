// controller/OrganizerController.ts
import OrganizerService from "../service/OrganizerService";
import Organizer from "../model/Organizer";

import { Event } from "../model/Event";
import Speaker from "../model/Speaker";


import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import Address from "../model/Address";

import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";
import Participant from "../model/Participant";

export default class OrganizerController {
  constructor(private service: OrganizerService) {}

  // --- Organizer ---
  public createOrganizer(id: number, name: string, cpf: string, sector: string, email: string): Organizer 
  {
    return this.service.createOrganizer(id, name, cpf, sector, email);
  }

  public getAllOrganizers(): Organizer[] {
    return this.service.getAllOrganizers();
  }

  // --- Event ---
  public createEvent(
    id: number,
    type: TypeEventEnum,
    name: string,
    time: number,
    maxParticipants: number,
    field: string,
    status: StatusEnum,
    optional: Address | string
  ): OnSiteEvent | AsyncEvent {
    return this.service.createEvent(id, type, name, time, maxParticipants, field, status, optional);
  }

  // --- Address ---
    public createAddress(rua: string, numero: number, city: string, state: string, zip: string): Address {
        return this.service.createAddress(rua, numero, city, state, zip);
  }

  // --- Speaker
    public addSpeakerinEvent(event: Event<Participant>, speaker: Speaker) {
        return this.service.addSpeakerInEvent(event,speaker)
    }
}
