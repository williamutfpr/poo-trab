import Endereco from "./Endereco.js"; 

export default class People {
    id: number;
    name: string;
    cpf: string;
    endereco: Endereco;

    constructor(id: number, name: string, cpf: string, endereco: Endereco) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.endereco = endereco;
    }

    getName(): string {
        return this.name;
    }

    getCpf(): string {
        return this.cpf;
    }

    getEndereco(): string {
        return this.endereco.getEnderecoCompleto();
    }
}
