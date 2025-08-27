import type Participant from "./Participant";

export default class Event {
    private name: string;
    private time: string; // hours
    private maxParticipants: number;
    private field: string; // campo
    private list: Participant[];

    constructor(name: string,
                time: string,
                maxParticipants: number,
                currentParticipants: number,
                field: string,


    ){
        this.name = name;
        this.time = time;
        this.maxParticipants = maxParticipants;
        this.field = field;
        this.list = [];
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getTime(): string {
        return this.time;
    }
   public setTime(time: string): void {
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
    private setList(list: Participant[]): void {
        this.list = list;
    }


    public addParticipant(p: Participant): void {
        if (this.list.length < this.maxParticipants) {
            this.list.push(p);
            console.log(`Participante adicionado ao evento ${this.name} com sucesso!`);
        } else {
            console.log( `Não foi possível entrar em ${this.name}, número máximo atingido!`);
        }
    }


    public toString(): string {
        return `${this.name} - ${this.time.toLocaleString()} | Participantes: ${this.list.length}/${this.maxParticipants}`;
    }
}
