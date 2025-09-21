export default class Participant {
  private id: number;
  private name: string;
  private cpf: string;
  private mail: string;
  private enrollmentId: number;

  constructor(
    id: number,
    name: string,
    cpf: string,
    mail: string,
    enrollmentId: number
  ) {
    this.id = id;
    this.name = name;
    this.cpf = cpf;
    this.mail = mail;
    this.enrollmentId = enrollmentId;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getMail(): string {
    return this.mail;
  }

  public getEnrollmentId(): number {
    return this.enrollmentId; // ✅ retorna o valor real
  }
}
