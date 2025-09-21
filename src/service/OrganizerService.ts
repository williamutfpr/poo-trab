// service/OrganizerService.ts
import Organizer from "../model/Organizer";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import Database from "../db/Database";
import Address from "../model/Address";
import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";

export default class OrganizerService {
  private db = Database.getInstance();

  // --- Organizer ---
  public createOrganizer(id: number, name: string, cpf: string, sector: string, email: string): Organizer {
    const organizer = new Organizer(id, name, cpf, sector, email);
    this.db.insertNewOrganizer(organizer);
    return organizer;
  }

  public getAllOrganizers(): Organizer[] {
    return this.db.getAllOrganizers();
  }

  public removeOrganizer(organizer: Organizer): boolean {
    return this.db.removeOrganizer(organizer);
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
  ): AsyncEvent | OnSiteEvent {
    let event: AsyncEvent | OnSiteEvent;

    if (optional instanceof Address) {
      event = new OnSiteEvent(id, type, name, time, maxParticipants, field, status, optional);
    } else {
      event = new AsyncEvent(id, type, name, time, maxParticipants, field, status, optional);
    }

    this.db.insertNewEvent(event);
    return event;
  }

  public removeEvent(event: AsyncEvent | OnSiteEvent): boolean {
    return this.db.removeEvent(event);
  }

  public getAllEvents(): (AsyncEvent | OnSiteEvent)[] {
    return this.db.getAllEvents();
  }

  // --- Address helper ---
  public createAddress(rua: string, numero: number, city: string, state: string, zip: string): Address {
    return new Address(rua, numero, city, state, zip);
  }
}
