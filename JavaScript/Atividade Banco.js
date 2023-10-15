const banco = {
  conta: "000123574",
  saldo: 100000,
  tipoConta: "Corrente",
  agencia: "7890",
  buscarSaldo: function() {
    return this.saldo;
  },
  deposito: function(valor) {
    this.saldo += valor;
    return this.saldo;
  },
  saque: function(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return this.saldo;
    } else {
      return "Saldo insuficiente";
    }
  },
  numeroConta: function() {
    return this.conta;
  }
};

console.log("Saldo atual:", banco.buscarSaldo()); 
console.log("Novo saldo após depósito:", banco.deposito(50000)); 
console.log("Novo saldo após saque:", banco.saque(25000)); 
console.log("Número da conta:", banco.numeroConta());
