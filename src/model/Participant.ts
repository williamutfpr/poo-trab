import People from "./People";
import Address from "./Address";

export default class Participant extends People {
  private enrollmentId: number; // inscrição

  constructor(id:number , name: string, cpf: string, endereco: Address, enrollmentId: number, mail: string) {
    super(id,name, cpf, endereco, mail);
    this.enrollmentId = enrollmentId;
  }

  public getInscricaoId(): number {
    return this.enrollmentId;
  }
}
