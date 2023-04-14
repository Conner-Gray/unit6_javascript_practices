class Car{
    constructor(make, model){
        this.state = 'PARKED';
        this.mileage = 0;
        this.make = make;
        this.model = model;
    }

    drive(miles){
        this.state = 'DRIVING';
        this.mileage += miles;
    }

    park(){
        if(this.state == 'STOPPED'){
            this.state = 'PARKED';
        }
    }

    brake(){
        if(this.state == 'DRIVING'){
            this.state = 'STOPPED';
        }
    }

}