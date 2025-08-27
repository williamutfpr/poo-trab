export default class Address {
    constructor(rua, numero, city, state, cep) {
        this.rua = rua;
        this.numero = numero;
        this.city = city;
        this.state = state;
        this.cep = cep;
    }
    // Getters
    getRua() {
        return this.rua;
    }
    getNumero() {
        return this.numero;
    }
    getCity() {
        return this.city;
    }
    getState() {
        return this.state;
    }
    getCep() {
        return this.cep;
    }
    // Setters
    setRua(rua) {
        this.rua = rua;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    setCity(city) {
        this.city = city;
    }
    setState(state) {
        this.state = state;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getEnderecoCompleto() {
        return `${this.rua}, ${this.numero} - ${this.city}/${this.state} - CEP: ${this.cep}`;
    }
}
