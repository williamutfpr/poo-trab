import { StatusEnum } from "../Enum/StatusEventEnum";
import Address from "./Address";
import Speaker from "./Speaker";
import Participant from "./Participant";
import Organizer from "./Organizer";
import { TypeEventEnum } from "../Enum/TypeEventEnum";

import { randomInt } from "crypto";

//
export abstract class Event {
    private id: number;
    private type: TypeEventEnum;
    private name: string;
    private time: number;
    private maxParticipants: number;

    private listP: Participant[];
    private listS: Speaker[];
    private listO: Organizer[];

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
        this.time = time; // minutes
        this.maxParticipants = maxParticipants;
        this.listP = [];
        this.listS = [];
        this.listO = [];
        this.field = field;
        this.status = status;
    }

    // --- id ---
    public getId(): number {
        return this.id;
    }

    public static setId(): number {
        return randomInt(1, 100000000);
    }

    // --- Types ---
    public getType(): TypeEventEnum {
        return this.type;
    }
    public setType(type: TypeEventEnum): void {
        this.type = type;
    }

    // --- Name ---
    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    // --- Time ---
    public getTime(): number {
        return this.time;
    }
    public setTime(time: number): void {
        this.time = time;
    }

    // --- Max Participants ---
    public getMaxParticipants(): number {
        return this.maxParticipants;
    }
    public setMaxParticipants(maxParticipants: number): void {
        this.maxParticipants = maxParticipants;
    }

    public getCurrentParticipants(): number {
        return this.listP.length;
    }

    // --- Field ---
    public getField(): string {
        return this.field;
    }
    public setField(field: string): void {
        this.field = field;
    }

    // --- Status ---
    public getStatus(): StatusEnum {
        return this.status;
    }
    public setStatus(status: StatusEnum): void {
        this.status = status;
    }


    // --- Participants ---
    public getParticipants(): Participant[] {
        return this.listP;
    }

    public  addParticipant(p: Participant): boolean {
        if (this.listP.length < this.maxParticipants && !this.listP.includes(p)) {
            this.listP.push(p);
            return true;
        }
        return false; // evento cheio ou já existe
    }

    public removeParticipant(p: Participant): boolean {
        const index = this.listP.indexOf(p);
        if (index !== -1) {
            this.listP.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Speakers ---
    public getSpeakers(): Speaker[] {
        return this.listS;
    }

    public addSpeaker(s: Speaker): boolean {
        if (!this.listS.includes(s)) {
            this.listS.push(s);
            return true;
        }
        return false;
    }

    public removeSpeaker(s: Speaker): boolean {
        const index = this.listS.indexOf(s);
        if (index !== -1) {
            this.listS.splice(index, 1);
            return true;
        }
        return false;
    }

    // --- Organizers ---
    public getOrganizers(): Organizer[] {
        return this.listO;
    }

    public Organizers(o: Organizer): boolean {
        if (!this.listO.includes(o)) {
            this.listO.push(o);
            return true;
        }
        return false;
    }

    public removeOrganizers(o: Organizer): boolean {
        const index = this.listO.indexOf(o);
        if (index !== -1) {
            this.listO.splice(index, 1);
            return true;
        }
        return false;
    }

    // implementação abstrata
    public abstract getLocal():string | Address;

    // sobrecarga --
    public getEvent(){
        console.log("This is a hybrid event")
    }
}
