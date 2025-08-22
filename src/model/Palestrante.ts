import People from "./People.js";
import Endereco from "./Endereco.js";

export default class Palestrante extends People {
  private tema: string;

  constructor(id:number, name: string, cpf: string, endereco: Endereco, tema: string) {
    super(id, name, cpf, endereco);
    this.tema = tema;
  }

  public getTema(): string {
    return this.tema;
  }
}
