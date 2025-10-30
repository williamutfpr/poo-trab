import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import OrganizerService from "../service/OrganizerService";
import { StatusEnum } from "../Enum/StatusEventEnum";
import Address from "../model/Address";
import { TypeEventEnum } from "../Enum/TypeEventEnum";

export default class EventJest {
  public testEventCreate(org: OrganizerService): AsyncEvent | OnSiteEvent {
    const id = 1;
    const type = TypeEventEnum.EAD;
    const name = "Workshop de TypeScript";
    const time = 120;
    const maxParticipants = 50;
    const field = "Programação";
    const status = StatusEnum.IP;
    const link = "https://meet.example.com";

    const address = new Address("street", 0, "city", "state", "zip");

    const eventAsync = org.createEvent(
      id,
      type,
      name,
      time,
      maxParticipants,
      field,
      status,
      link
    );

    const eventOnSite = org.createEvent(
      id,
      type,
      name,
      time,
      maxParticipants,
      field,
      status,
      address
    );

    // ✅ Retorne o evento que quer testar
    return eventAsync;
  }
}