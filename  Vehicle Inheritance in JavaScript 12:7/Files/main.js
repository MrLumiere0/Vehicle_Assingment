// Part 1: Proto Inheritance

const vehicleProto = {
    Make: "",
    Model: "",
    Year:""
}

let car = Object.create(vehicleProto);
car.numWheels = 4;
car.numDoors = 4;
car.sunroof = "";


let bike = Object.create(vehicleProto);
bikes.numofSeats = 1;
bike.numWheels = 2;

// // Part 2: Cnntructor Inheritance

function Vehicle (make, model, year) {
    this.make = make;
    this.model = model;
    this.year= year;
}

Object.setPrototypeOf (Car, Vehicle);
Object.setPrototypeOf(Bike, Vehicle);

function Car (make, model, year, numDoors, numWheels, sunroof) {
Vehicle.call(this, make, model, year);
this.numDoors = numDoors;
this.numWheels = numWheels;
this.sunroof = sunroof;
}


function Bike (make, model, year, litres, numofSeats, numWheels) {
    Vehicle.call(this, make, model, year);
    this.litres = litres;
    this.numWheels = numWheels
}

let newBike = new Bike ("Ducati", "Panigale", 2023, 2.5, 1, 2);

console.log(newBike);

// Part 3: Classes

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}


class Car extends Vehicle {
    constructor(make, model, year,numDoors, numWheels, sunroof, tankCapacity, fuelConsumption) {
        super (make,model,year);
        this.numDoors = numDoors;
        this.numWheels = numWheels;
        this.sunroof = sunroof;
        this.tankCapacity = tankCapacity;
        this.fuelConsumption = fuelConsumption
    }
    
}


    class Bike extends Vehicle {
        constructor(make, model, year, litres, numWheels, tankCapacity, fuelConsumption,) {
            super (make,model,year);
            this.litres = litres;
            this.numWheels = numWheels;
            this.tankCapacity = tankCapacity;
            this.fuelConsumption = fuelConsumption
        }
    }


// Bonuser or Advanced Task 
const maintenanceMixin = {
     maxMiles (tankCapacity, fuelConsumption) {
        return Math.round(this.tankCapacity * this.fuelConsumption);
    }
}

Object.assign(Vehicle.prototype, maintenanceMixin);

const myCar = new Car("merc", "amg", 2023, 4, 4, "yes", 23, 24);
console.log(myCar.maxMiles());

