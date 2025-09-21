import { StatusEnum } from "../Enum/StatusEventEnum";
import { TypeEventEnum } from "../Enum/TypeEventEnum";
import Address from "../model/Address";

import Organizer from "../model/Organizer";
import { Event } from "../model/Event";

export interface IOrganizer {
  createOrganizer(
    id:number, 
    name: string, 
    cpf: string, 
    sector: string, 
    mail: string
  ) : Organizer

  createEvent(
    id: number,
    type: TypeEventEnum,
    name: string,
    time: number,
    maxParticipants: number,
    field: string,
    status: StatusEnum,
    opicional?: Address | string
  ): Event


}