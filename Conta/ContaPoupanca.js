/**
 * ContaPoupanca
 *
 * @class contaPoupanca
 * @extends {Conta}
 */
import Conta from "./Conta.js";

class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
    const taxa = 1.02;
    return super._sacar(valor, taxa);
  }
}

export default ContaPoupanca;
