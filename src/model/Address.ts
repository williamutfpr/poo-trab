export default class Address {
    rua: string;
    numero: number;
    city: string;
    state: string;
    cep: string;

    constructor(rua: string, numero: number, city: string, state: string, cep: string) {
        this.rua = rua;
        this.numero = numero;
        this.city = city;
        this.state = state;
        this.cep = cep;
    }

    // Getters
    public getRua(): string {
        return this.rua;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getCity(): string {
        return this.city;
    }

    public getState(): string {
        return this.state;
    }

    public getCep(): string {
        return this.cep;
    }

    // Setters
    public setRua(rua: string): void {
        this.rua = rua;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public setCep(cep: string): void {
        this.cep = cep;
    }

    getEnderecoCompleto(): string {
        return `${this.rua}, ${this.numero} - ${this.city}/${this.state} - CEP: ${this.cep}`;
    }
}
