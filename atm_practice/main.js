class ATM{
    constructor(firstName, lastName, balance=0){
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
        this.isOverdraft = false;
    }
    
    
    deposit(amount){
        this.balance += amount;
        if(this.balance >= 0){
            this.isOverdraft = false;
        }
    }

    withdraw(amount){
        if(this.isOverdraft == false){
            this.balance -= amount;
            if(this.balance < 0){
                this.isOverdraft = true;
            }
        }
        else{
            return "You are overdraft. You cannot withdraw any funds."
        }
        
    }

    checkBalance(){
        return `${this.firstName} ${this.lastName}'s balance is $${this.balance.toFixed(2)}`
    }

    checkIsOverdraft(){
        if(!this.isOverdraft){
            return `${this.firstName} ${this.lastName}'s account has $${this.balance.toFixed(2)} funds available to withdraw.`
        }
        else{
            return `${this.firstName} ${this.lastName}'s account is OVERDRAFT by -$${Math.abs(this.balance.toFixed(2))}`
        }
       
    }
}

