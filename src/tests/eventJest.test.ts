import OrganizerService from "../service/OrganizerService";
import EventJest from "./EventJest";

class MockOrganizerService {
  createEvent(
    id: number,
    type: any,
    name: string,
    time: number,
    maxParticipants: number,
    field: string,
    status: any,
    arg8: any
  ) {
    return {
      id,
      type,
      name,
      time,
      maxParticipants,
      field,
      status,
      arg8,
      getName() {
        return name; 
      },
    };
  }
}

const org = new MockOrganizerService() as unknown as OrganizerService;
const eventJest = new EventJest();

test("teste de criação de evento assíncrono", () => {
  const event = eventJest.testEventCreate(org);
  expect(event.getName()).toBe("Workshop de TypeScript");
});
