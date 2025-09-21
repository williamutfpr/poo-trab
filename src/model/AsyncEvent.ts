import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";
import { Event } from "./Event";

export class AsyncEvent extends Event {

  constructor(
    id: number,
    type: TypeEventEnum,
    name: string, 
    time: number, 
    maxParticipants: number, 
    field: string, 
    status: StatusEnum, 
    link: string
  ) {
    super(id,type, name, time, maxParticipants, field, status);
    this.link = link;
  }

}