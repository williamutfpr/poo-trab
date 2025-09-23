import { StatusEnum } from "../Enum/StatusEventEnum";
import { Event } from "./Event";
import Address from "./Address";
import { TypeEventEnum } from "../Enum/TypeEventEnum";

export class OnSiteEvent extends Event {

  constructor(
    id: number,
    type: TypeEventEnum,
    name: string,
    time: number,
    maxParticipants: number,
    field: string,
    status: StatusEnum,
    address: Address
  ) {
    super(id, type, name, time, maxParticipants, field, status);
    this.address = address;
  }

  // sobrecarga
  public static getEvent() {
    console.log("This is in-person event")
  }
}