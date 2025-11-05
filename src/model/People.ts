import { randomInt } from "crypto";
import Entity from "./Entity";


export default class People extends Entity {
    
    cpf: string;
    mail: string;

    constructor(id: number, name: string, cpf: string, mail: string) {
        super(id,name)
        this.cpf = cpf;
        this.mail = mail;
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
