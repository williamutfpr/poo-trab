import { StatusEnum } from "../Enum/StatusEventEnum";
import Address from "./Address";
import Speaker from "./Speaker";
import Participant from "./Participant";
import Organizer from "./Organizer";
import { TypeEventEnum } from "../Enum/TypeEventEnum";

import { randomInt } from "crypto";
import FailCreateEvent from "../Error/FailEvent";
import { PersonManager } from "./PeopleManager";


export abstract class Event<TParticipant extends Participant> { 
    private id: number;
    private type: TypeEventEnum;
    private name: string;
    private time: number;
    private maxParticipants: number;

    public participants: PersonManager<TParticipant>;
    public speakers: PersonManager<Speaker>;
    public organizers: PersonManager<Organizer>;

    private field: string;
    private status: StatusEnum;

    constructor(
        id: number,
        type: TypeEventEnum,
        name: string,
        time: number,
        maxParticipants: number,
        field: string,
        status: StatusEnum,
    ) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.time = time; 
        this.maxParticipants = maxParticipants;
        this.field = field;
        this.status = status;

        this.participants = new PersonManager<TParticipant>(this.maxParticipants);
        this.speakers = new PersonManager<Speaker>();
        this.organizers = new PersonManager<Organizer>();
    }

    public getId(): number {
        return this.id;
    }

    public static setId(): number {
        return randomInt(1, 100000000);
    }

    public getType(): TypeEventEnum {
        return this.type;
    }
    public setType(type: TypeEventEnum): void {
        this.type = type;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getTime(): number {
        return this.time;
    }
    public setTime(time: number): void {
        this.time = time;
    }

    public getMaxParticipants(): number {
        return this.maxParticipants;
    }
    public setMaxParticipants(maxParticipants: number): void {
        this.maxParticipants = maxParticipants;
        // Idealmente, você também atualizaria o 'maxSize' no PersonManager aqui.
    }

    public getCurrentParticipants(): number {
        return this.participants.getCount();
    }

    public getField(): string {
        return this.field;
    }
    public setField(field: string): void {
        this.field = field;
    }

    public getStatus(): StatusEnum {
         return this.status;
    }
    public setStatus(status: StatusEnum): void {
        this.status = status;
    }


    public getParticipants(): TParticipant[] {
        return this.participants.getList();
    }

    public addParticipant(p: TParticipant): boolean {
        return this.participants.add(p);
    }

    public removeParticipant(p: TParticipant): boolean {
        return this.participants.remove(p);
    }

    public getSpeakers(): Speaker[] {
        return this.speakers.getList();
    }

    public addSpeaker(s: Speaker): boolean {
        return this.speakers.add(s);
    }

    public removeSpeaker(s: Speaker): boolean {
        return this.speakers.remove(s);
    }

    public getOrganizers(): Organizer[] {
        return this.organizers.getList();
    }

    public addOrganizer(o: Organizer): boolean {
        return this.organizers.add(o);
    }

    public removeOrganizers(o: Organizer): boolean {
        return this.organizers.remove(o);
    }

    public abstract getLocal(): string | Address;

    public getTypeEvent() {
        console.log("hybrid event");
    }
}