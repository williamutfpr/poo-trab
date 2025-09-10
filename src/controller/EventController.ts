import EventService from "../service/EventService";

export default class EventController {

  public getNewEventService(): EventService {
    return new EventService()
  }

}
