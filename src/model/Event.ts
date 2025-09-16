import { StatusEnum } from "../Enum/StatusEnum";
import Address from "./Address";
import Speaker from "./Speaker";
import Participant from "./Participant";
import Organizer from "./Organizer";

export default class Event {
    private name: string;
    private time: number;
    private maxParticipants: number;

    private listP: Participant[];
    private listS: Speaker[];
    private listO: Organizer[];

    private field: string;
    private status: StatusEnum;
    private address: Address;

    constructor(
        name: string,
        time: number,
        maxParticipants: number,
        field: string,
        status: StatusEnum,
        address: Address,
    ) {
        this.name = name;
        this.time = time; // minutes
        this.maxParticipants = maxParticipants;
        this.listP = [];
        this.listS = [];
        this.listO = [];
        this.field = field;
        this.status = status;
        this.address = address;
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

    // --- Address ---
    public getAddress(): Address {
        return this.address;
    }
    public setAddress(address: Address): void {
        this.address = address;
    }

    // --- Participants ---
    public getParticipants(): Participant[] {
        return this.listP;
    }

    public addParticipant(p: Participant): boolean {
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
}
