export default class Endereco {
    constructor(rua, numero, cidade, estado, cep) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
    getEnderecoCompleto() {
        return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado} - CEP: ${this.cep}`;
    }
}
