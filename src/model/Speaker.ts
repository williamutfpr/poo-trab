import People from "./People";

export default class Speaker extends People {
  private practice_area: string;

  constructor(id:number, name: string, cpf: string,  practice_area: string , mail: string) {
    super(id, name, cpf, mail);
      this.practice_area = practice_area;
  }

  public getPractice_area(): string {
    return this.practice_area;
  }

  public setPractice_area(value: string) {
      this.practice_area = value;
  }
}