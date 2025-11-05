import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";
import FailEvent from "../Error/FailEvent";
import { OnSiteEvent } from "../model/OnSiteEvent";
import OrganizerService from "../service/OrganizerService";
import EventJest from "./EventJest";

export default class JestTestCreateEventOnSite {
  createEvent(
    id: number,
    type: TypeEventEnum,
    name: string,
    time: number,
    maxParticipants: number,
    field: string,
    status: StatusEnum,
    arg8: OnSiteEvent
  ) {
    return {
      id,
      type,
      name,
      time,
      maxParticipants,
      field,
      status,
      arg8
    };
  }
}

const org = new OrganizerService;
const eventJest = new EventJest();

test("teste de criação de evento presencial", () => {

  try {
    const event = eventJest.testEventCreate(org);
    expect(event.getName()).toBe("Workshop de TypeScript");
    expect(event.getLocal()).toBeInstanceOf(Object);

  } catch (error) {
    throw new FailEvent("Fail to create Event")
  }
  finally {
    console.log("Test Finished")
  }

});
