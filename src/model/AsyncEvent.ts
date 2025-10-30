import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";
import { Event } from "./Event";

export class AsyncEvent extends Event {
  private link: string

  constructor(
    id: number,
    type: TypeEventEnum,
    name: string,
    time: number, // in minutes
    maxParticipants: number,
    field: string,
    status: StatusEnum,
    link: string
  ) {
    super(id, type, name, time, maxParticipants, field, status);
    this.link = link;
  }

  public getLocal(): string {
    return this.link;
  }

  // --- Address ---
  public setLink(link: string): void {
    this.link = link;
  }
  // sobrecarga ---
  public static getTypeEvent() {
    console.log("This is an async event")
  }

  
}