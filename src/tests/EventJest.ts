import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";
import Address from "../model/Address";
import { AsyncEvent } from "../model/AsyncEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import OrganizerService from "../service/OrganizerService";

export default class EventJest {
  public testEventCreate(org: OrganizerService): AsyncEvent | OnSiteEvent {
    const id = 1;
    const type = TypeEventEnum.EAD;
    const name = "Workshoppp de TypeScript";
    const time = 120;
    const maxParticipants = 50;
    const field = "Programação";
    const status = StatusEnum.IP;
    const link = "https://meet.example.com";

    // Crie o evento que você quer testar
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

    const address = new Address("street", 0, "city", "state", "zip");
    
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
    
    
   // return eventOnSite;

    return eventAsync;
  }
}