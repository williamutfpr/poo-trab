
import People from "./People";

export default class Participant extends People  {
  private enrollmentId: number;

  constructor(
    id: number,
    name: string,
    cpf: string,
    mail: string,
    enrollmentId: number
  ) {
    super(id, name,cpf,mail);
    this.cpf = cpf;
    this.mail = mail;
    this.enrollmentId = enrollmentId;
  }

  public getEnrollmentId(): number {
    return this.enrollmentId;
  }
}
