class Glass{
    constructor(capacity){
        this.amount = 0;
        this.capacity = capacity;
    }

    snapAmount(){
        if(this.amount > this.capacity){
            this.amount = this.capacity;
        }
        else if(this.amount < 0){
            this.amount = 0;
        }
    }

    addWater(amount){
        this.amount += amount;
        this.snapAmount();
    }

    removeWater(amount){
        this.amount -= amount;
        this.snapAmount();
    }

    emptyGlass(){
        this.amount = 0;
    }

    fillErUp(){
        this.amount = this.capacity;
    }
}