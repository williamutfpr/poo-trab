import { randomInt } from "crypto";


export default class People {
    id: number;
    name: string;
    cpf: string;
    mail: string;

    constructor(id: number, name: string, cpf: string, mail: string) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.mail = mail;
    }

    public getId(): number {
        return this.id;
    }

    public static setId(): number {
        return randomInt(1, 100000000);
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string) {
        this.cpf = cpf;
    }

    public getMail(): string {
        return this.mail;
    }

    public setMail(mail: string) {
        this.mail = mail;
    }
}
