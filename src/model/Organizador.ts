import People from "./People.js";
import Endereco from "./Endereco.js";

export default class Organizador extends People {
  private setor: string;

  constructor(id:number, name: string, cpf: string, endereco: Endereco, setor: string) {
    super(id, name, cpf, endereco);
    this.setor = setor;
  }

  public getSetor(): string {
    return this.setor;
  }
}
