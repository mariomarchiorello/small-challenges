// BANK APP

class Bank {
    constructor(name){
        this._customer = name;
        this._accountBalance = 0;
    };
    get customer(){
        return this._name
    };
    get accountBalance(){
        return this._accountBalance
    };
    printInfo() {
        console.log(`This Account belongs to ${this._customer}, the Accountbalance is ${this._accountBalance}`);

    };
    deposit(parameter){
        if (typeof parameter ==="number"){
            return this._accountBalance += parameter;
        }else{
            console.log("Invalid Deposit");
        };
    };
    withdraw(parameter){
        if (typeof parameter ==="number" && parameter <= this._accountBalance){
            return this._accountBalance -= parameter;
        }else if ( parameter > this._accountBalance || typeof this._accountBalance !== "number"){
            console.log(`ERROR! ${this._customer}, the amount you tried to withdarw is either bigger than your balance or you gave an invalid input`);

        };
    };
};

// const sheldon = new Bank("Moonpie");
// sheldon.deposit(10);
// const raj = new Bank("Raj");
// raj.deposit(100000);
// sheldon.withdraw(1000);
// raj.withdraw(5);
// sheldon.printInfo();
// raj.printInfo();
