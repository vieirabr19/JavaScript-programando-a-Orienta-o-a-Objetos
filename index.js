import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
console.log(cliente1.cpf);

const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(200, conta2);
console.log(ContaCorrente.numeroDeContas);