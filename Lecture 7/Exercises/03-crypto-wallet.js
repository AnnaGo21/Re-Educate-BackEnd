/**
 * 3)შექმენი CryptoWallet (კრიპტო საფულე) კლასი, მეთოდებით: deposit(), withdraw(), transfer(), getHistory(),
 */

class CryptoWallet {
  constructor() {
    this.balance = 0;
    this.history = []; //For calculating the history of money transactions
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({
      type: "DEPOSIT",
      amount,
    });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough balance");
      return;
    }

    this.balance -= amount;
    this.history.push({
      type: "WITHDRAW",
      amount,
    });
  }

  transfer(amount, wallet) {
    if (amount > this.balance) {
      console.log("Not enough balance");
      return;
    }

    this.balance -= amount;
    wallet.balance += amount;

    this.history.push({
      type: "TRANSFER",
      amount,
    });
  }

  getHistory() {
    return this.history;
  }
}

const wallet1 = new CryptoWallet();
const wallet2 = new CryptoWallet();

wallet1.deposit(1000);
wallet1.transfer(300, wallet2);
wallet1.withdraw(50);
wallet2.withdraw(50);

console.log(wallet1.getHistory());
console.log(wallet2.getHistory());
wallet2.withdraw(400);
