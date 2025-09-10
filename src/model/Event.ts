import Participant from "./Participant";
import { StatusEnum } from "../Enum/StatusEnum";
export default class Event {
    private name: string;
    private time: number;
    private maxParticipants: number;
    private list: Participant[];
    private field: string;
    private status: StatusEnum

    constructor(
        name: string,
        time: number,
        maxParticipants: number,
        field: string,
        status: StatusEnum
    ) {
        this.name = name;
        this.time = time; // minutes
        this.maxParticipants = maxParticipants;
        this.list = [];
        this.field = field;
        this.status = status;
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
    }

    public getCurrentParticipants(): number {
        return this.list.length;
    }

    public getField(): string {
        return this.field;
    }
    public setField(field: string): void {
        this.field = field;
    }

    public getList(): Participant[] {
        return this.list;
    }

    public getStatus(): StatusEnum {
        return this.status;
    }
    public setStatus(status: StatusEnum): void {
        this.status = status;
    }

    public toString(): string {
        return `${this.name} - ${this.time.toLocaleString()} | Participantes: ${this.list.length
            }/${this.maxParticipants}`;
    }
}
