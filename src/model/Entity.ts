import { randomInt } from "node:crypto";

export default class Entity implements IEntity {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }
  public setId(): number {
    return randomInt(1, 100000000);
  }

}