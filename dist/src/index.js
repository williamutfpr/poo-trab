/*
import People from "./model/People.js";
import Address from "./model/Address.js";
import Event from "./model/Event.js";

const endereco1 = new Address("Rua A", 123, "Curitiba", "PR", "80000-000");
const pessoa1 = new People(1, "William", "12345678900", endereco1, "wwillveiga@gmail.com");

console.log(pessoa1.getName());
console.log(pessoa1.getCpf());
console.log(pessoa1.getAddress());

const evento1 = new Event("Workshop de TypeScript", ("2025-09-01"), 1 , 'TI');

evento1.addParticipant();
evento1.addParticipant();

console.log(evento1.toString());
*/
import MainController from "./controller/MainController";
new MainController();
