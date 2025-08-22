import People from "./model/People.js";
import Endereco from "./model/Endereco.js";
const endereco1 = new Endereco("Rua A", 123, "Curitiba", "PR", "80000-000");
const pessoa1 = new People(1, "William", "12345678900", endereco1);
console.log(pessoa1.getName()); // William
console.log(pessoa1.getCpf()); // 12345678900
console.log(pessoa1.getEndereco()); // Rua A, 123 - Curitiba/PR - CEP: 80000-000
