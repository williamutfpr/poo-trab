export default class Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
    cep: string;

    constructor(rua: string, numero: number, cidade: string, estado: string, cep: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    getEnderecoCompleto(): string {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado} - CEP: ${this.cep}`;
    }
}
