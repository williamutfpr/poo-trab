import People from "./People.js";
import Endereco from "./Endereco.js";

export default class Participante extends People {
  private inscricaoId: number;

  constructor(id:number ,name: string, cpf: string, endereco: Endereco, inscricaoId: number) {
    super(id,name, cpf, endereco);
    this.inscricaoId = inscricaoId;
  }

  public getInscricaoId(): number {
    return this.inscricaoId;
  }
}
