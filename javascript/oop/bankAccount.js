class BankAccount {
  constructor(intRate = 0.08, balance = 0) {
    this.balance = balance;
    this.intRate = intRate;
  }
  deposit(amount) {
    this.balance += amount;
    return this;
  }
  withdraw(amount) {
    this.balance -= amount;
    if (this.balance < 0) {
      console.log("Insufficient funds: Charging a $5 fee");
      this.balance -= 5;
    }
    return this;
  }
  displayAccountInfo() {
    console.log(
      `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
    );
    return this;
  }
  yieldInterest() {
    this.balance += this.balance * this.intRate;
    return this;
  }
}

const bank = new BankAccount();
const bank2 = new BankAccount(0.06, 200);

// keep going
