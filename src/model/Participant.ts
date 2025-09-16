import People from "./People";

export default class Participant extends People {
  private enrollmentId: number; // inscrição

  constructor(id:number , name: string, cpf: string, enrollmentId: number, mail: string) {
    super(id,name, cpf, mail);
    this.enrollmentId = enrollmentId;
  }

  public getInscricaoId(): number {
    return this.enrollmentId;
  }
}
