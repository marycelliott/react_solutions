class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.accountBalance = 0;
  }

  makeDeposit(amount) {
    this.accountBalance += amount;
    return this;
  }

  makeWithdrawal(amount) {
    this.accountBalance -= amount;
    return this;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Account Balance: $${this.accountBalance}`);
    return this;
  }
}

const crow = new User("Crow T. Robot", "hamdingers@gizmonic.com");
const tom = new User("Tom Servo", "tommonster@gizmonic.com");

crow.makeDeposit(200).makeDeposit(100).displayInfo();

// keep going
