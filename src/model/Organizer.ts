import People from "./People";
import Address from "./Address";

export default class Organizer extends People {
  private sector: string; // setor (TI,Pscico,Nutri ...)

  constructor(id:number, name: string, cpf: string, sector: string, mail: string) {
    super(id, name, cpf,mail);
    this.sector = sector;
  }

  public getSector(): string {
    return this.sector;
  }

  public setSector(value: string) {
      this.sector = value;
  }
}
