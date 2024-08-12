{
  /*classes*/
}
class Car {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    return `this is a ${this.name} ${this.model} that was developed in ${this.year}`;
  }
}

class User {
  constructor(fullName, email, phone, password) {
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  login() {
    return `this ${this.email} has logged in successfully`;
  }
  logout() {
    return `this ${this.email} has logged out successfully`;
  }
}

{
  /*abstraction*/
}
const myCar = new Car("BMW", "x6", 2025);
const myOwnCar = new Car("RR", "cullian", 2025);
const myUser = new User(
  "oladipupo ademola",
  "ade@gmail.com",
  "09039601559",
  "oledotcom"
);
console.log(myCar);
console.log(myOwnCar);
console.log(myUser);
console.log(myUser.login());
console.log(myUser.logout());

{
  /*encapsulation*/
}
class bankAccount {
  #balance;
  constructor(name, email, phone, initialBalance) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.accNumber = phone;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 50) {
      this.#balance += amount;
    }
  }

  withraw(amount) {
    if (amount >= 50 && amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      comsole.log("Insufficient Funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const mybankAccount = new bankAccount("ikuforiji apayanya", "olohun@gmail.com", "08123456789", 5000000)
console.log(mybankAccount);


mybankAccount.deposit(2000000)
console.log(mybankAccount.getBalance())


{/*inheritance*/}
    class savingsAcc extends bankAccount{
        constructor(name, email, phone, initialBalance, interestRate) {
            super(name, email, phone, initialBalance)
            this.interestRate = interestRate
            
    }

    applyInterest(){
        const interest = this.getBalance() * this.interestRate/100
        this.deposit(interest)
        console.log(`Interest of  ${interest} added successfully`);
        
    }
}

    const mySavingsAcc = new savingsAcc("ikuforiji apayanya", "olohun@gmail.com", "08123456789", 500000, 5 )
    mySavingsAcc.deposit(1000)
    mySavingsAcc.withraw(120000)
    mySavingsAcc.applyInterest()
    console.log(mySavingsAcc.getBalance())


{/*polymorphism*/}
        class fixedDepositAcc extends bankAccount{
            constructor(name, email, phone, initialBalance, interestRate, maturityDate){
                super(name, email, phone, initialBalance

                )
                this.interestRate = interestRate
                this.maturityDate = maturityDate
            }
            applyInterest(){
                const interest = this.getBalance() * this.interestRate/100
                this.deposit(interest)
                console.log(`Interest of  ${interest} will be added after ${this.maturityDate}`);
            }
            withraw(){
                console.log(`withdrawals are not allowed during the locked period of ${this.maturityDate}`)
            }
           
        }

        const myfixedDepositAcc = new fixedDepositAcc("ikuforiji apayanya", "olohun@gmail.com", "08123456789", 5000000, 5, 12 )
        myfixedDepositAcc.applyInterest()
        myfixedDepositAcc.deposit(200000)
        myfixedDepositAcc.withraw(50000)
        console.log(myfixedDepositAcc.getBalance())


