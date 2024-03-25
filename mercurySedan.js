//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6; 
        this.passengers = 0;
        this.numberOfWheels = 4; 
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

    loadPassengers(num)
        if(this.passengers < this.maximumPassengers){
            if ((num + this.passengers) <= this.maximumPassengers){  /*Need to reference the solution for this. */
                this.passengers = num;                               /*It was tricky and a litle hard to wrap my head around tbh. */
                return this.passengers;
            } 
            else{
                console.log(this.model + " " + this.make + "is at capacity");
            }
        }
    

    start()
        if(this.fuel > 0){
            console.log("The engine has started!")
            return this.started = true;     
        }                                   /*I referenced veicleBaseClass.js here for the this.start I believe that was required  */
        else{
            console.log("Gas tank is empty!")
            return this.started = false;
        }
    

    checkService() 
        if(this.mileage > 25000){
            this.scheduleService = true
            return this.scheduleService;
        }

    



//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

let myCar = new Car('mercury', 'Suped-sedan', '2005', 'black', 50000)

myCar.start()
myCar.loadPassenger(6)
myCar.stop()
myCar.checkService()

console.log(myCar)








//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
